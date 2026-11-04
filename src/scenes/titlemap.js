// 시작 화면: 바르샤바 전체 지도. 원문의 장소를 갈래별로 보여 주고, 이야기는 원하는 사람만 시작한다.
import * as THREE from 'three';
import {LineSegments2} from 'three/examples/jsm/lines/LineSegments2.js';
import {LineSegmentsGeometry} from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial.js';
import {getCity} from './shared.js';
import {Crowd,COATS,CARS} from '../core/city.js';
import {loadTerrain,TERR,terrainize,terrainizeBld,h as TH} from '../core/terrain.js';
import {tag} from './mwindow.js';
import {PLACES} from '../data/places.js';

// tools/build_city.py의 투영식과 그 역변환
const LAT0=52.2355,LON0=21.03,KX=Math.cos(LAT0*Math.PI/180)*111320,KZ=110574;
export const toLL=(x,z)=>[LAT0-z/KZ,LON0+x/KX];
const PX=lon=>(lon-LON0)*KX,PZ=lat=>-(lat-LAT0)*KZ;
const IVORY=0xefe9da,AMBER=0xe0a548;

function groundText(text,w){const c=document.createElement('canvas');c.width=1024;c.height=256;const g=c.getContext('2d');g.font='600 150px "Noto Serif KR","AppleMyungjo","Nanum Myeongjo",serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#efe9da';g.fillText(text,512,128);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;
 const m=new THREE.Mesh(new THREE.PlaneGeometry(w,w/4),new THREE.MeshBasicMaterial({map:t,transparent:true,opacity:.42,depthWrite:false,depthTest:false,fog:false}));m.rotation.x=-Math.PI/2;m.renderOrder=7;return m}

// 오늘의 지도 타일(OpenStreetMap 표준 타일, © OpenStreetMap 기여자)을 땅에 깐다. CARTO 래스터는 API 키를 요구해 쓰지 않는다.
// 타일마다 웹 메르카토르 경계를 위 투영식으로 바꿔 평면 하나로 둔다. 기본 층(z13)은 전 영역, 세부 층은 카메라 둘레만 받는다.
// 높은 줌을 먼저, 조금 높게 그려 깊이 검사로 아래층을 가린다. 그래야 반투명이 두 번 섞이지 않는다.
function tileLayer(s,e,ct){
 const n2=z=>2**z,lonOf=(x,z)=>x/n2(z)*360-180,latOf=(y,z)=>Math.atan(Math.sinh(Math.PI*(1-2*y/n2(z))))*180/Math.PI;
 const tX=(lon,z)=>Math.floor((lon+180)/360*n2(z)),tY=(lat,z)=>{const r=lat*Math.PI/180;return Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*n2(z))};
 const geo=new THREE.PlaneGeometry(1,1,8,8);geo.rotateX(-Math.PI/2);
 const root=new THREE.Group();root.visible=false;s.add(root);const lv={};for(let L=13;L<=18;L++){lv[L]=new THREE.Group();root.add(lv[L])}
 const loader=new THREE.TextureLoader();loader.setCrossOrigin('anonymous');const aniso=e.renderer.capabilities.getMaxAnisotropy();
 const cache=new Map(),queue=[];let active=0,op=.6,on=false,last=0,cur=0;
 const pump=()=>{while(active<4&&queue.length){const t=queue.shift();if(t.dead)continue;active++;
  loader.load(`https://tile.openstreetmap.org/${t.z}/${t.x}/${t.y}.png`,tex=>{active--;if(t.dead){tex.dispose();pump();return}tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=aniso;t.mesh.material.map=tex;t.mesh.material.needsUpdate=true;t.ok=true;pump()},undefined,()=>{active--;cache.delete(t.k);lv[t.z].remove(t.mesh);t.mesh.material.dispose();pump()})}};
 const want=(z,x,y,tick)=>{const k=z+'/'+x+'/'+y;let t=cache.get(k);if(!t){const x0=PX(lonOf(x,z)),x1=PX(lonOf(x+1,z)),z0=PZ(latOf(y,z)),z1=PZ(latOf(y+1,z));
   const mesh=new THREE.Mesh(geo,terrainize(new THREE.MeshBasicMaterial({transparent:true,opacity:op,fog:false,depthWrite:true})));mesh.scale.set(x1-x0,1,z1-z0);mesh.position.set((x0+x1)/2,0,(z0+z1)/2);mesh.renderOrder=-z;mesh.visible=false;lv[z].add(mesh);
   t={z,x,y,k,mesh,ok:false};cache.set(k,t);queue.push(t)}t.used=tick;return t};
 const cover=(z,cx,cz,R,max,tick)=>{const[la0,lo0]=toLL(cx-R,cz+R),[la1,lo1]=toLL(cx+R,cz-R);const xa=tX(lo0,z),xb=tX(lo1,z),ya=tY(la1,z),yb=tY(la0,z);const L=[];
  for(let x=xa;x<=xb;x++)for(let y=ya;y<=yb;y++){const cxm=PX(lonOf(x+.5,z)),czm=PZ(latOf(y+.5,z));L.push([Math.hypot(cxm-cx,czm-cz),x,y])}L.sort((a,b)=>a[0]-b[0]);for(const[,x,y]of L.slice(0,max))want(z,x,y,tick)};
 const level=d=>d<1000?18:d<2200?17:d<4500?16:d<9000?15:14;
 const evict=()=>{if(cache.size<=170)return;const old=[...cache.values()].filter(t=>t.z!==13).sort((a,b)=>a.used-b.used);for(const t of old.slice(0,cache.size-170)){t.dead=true;lv[t.z].remove(t.mesh);t.mesh.material.map?.dispose();t.mesh.material.dispose();cache.delete(t.k)}};
 return{
  get on(){return on},
  set(v){on=!!v;root.visible=on;if(on){last=0;this.update()}},
  opacity(a){op=a;for(const t of cache.values())t.mesh.material.opacity=a},
  update(){if(!on)return;const o=ct.orbit,now=performance.now();const gap=Math.max(.5,o.dist*.0006);for(let L=13;L<=18;L++)lv[L].position.y=1.5+(L-13)*gap;
   if(now-last>200){last=now;cur=level(o.dist);cover(13,0,0,6500,64,now);if(cur>13)cover(cur,o.t.x,o.t.z,Math.min(o.dist*1.3,7000),80,now);evict();queue.sort((a,b)=>b.z-a.z);pump()}
   for(const t of cache.values())t.mesh.visible=t.ok&&t.z<=cur},
  stats(){let ok=0;for(const t of cache.values())if(t.ok)ok++;return{tiles:cache.size,loaded:ok,level:cur,queue:queue.length}},
  dispose(){for(const t of cache.values()){t.dead=true;t.mesh.material.map?.dispose();t.mesh.material.dispose()}cache.clear();queue.length=0;geo.dispose();s.remove(root)}};
}

// 바르샤바 바깥까지: z12 OSM 타일을 지형 위에 어둡게 깐다(항상 켜짐). 도심 데이터 바깥이 비어 보이지 않게 한다
function farTiles(s){const Z=12,n2=2**Z,lonOf=x=>x/n2*360-180,latOf=y=>Math.atan(Math.sinh(Math.PI*(1-2*y/n2)))*180/Math.PI;const R=24000;const[la0,lo0]=toLL(-R,R),[la1,lo1]=toLL(R,-R);
 const tX=lon=>Math.floor((lon+180)/360*n2),tY=lat=>{const r=lat*Math.PI/180;return Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*n2)};const geo=new THREE.PlaneGeometry(1,1,16,16);geo.rotateX(-Math.PI/2);
 const g=new THREE.Group();s.add(g);const loader=new THREE.TextureLoader();loader.setCrossOrigin('anonymous');const mats=[];
 for(let x=tX(lo0);x<=tX(lo1);x++)for(let y=tY(la1);y<=tY(la0);y++){const x0=PX(lonOf(x)),x1=PX(lonOf(x+1)),z0=PZ(latOf(y)),z1=PZ(latOf(y+1));const m=terrainize(new THREE.MeshBasicMaterial({color:0x5c5b58,fog:true,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:2}),-.2);m.visible=false;mats.push(m);
  loader.load(`https://tile.openstreetmap.org/${Z}/${x}/${y}.png`,tex=>{tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=8;m.map=tex;m.visible=true;m.needsUpdate=true});const me=new THREE.Mesh(geo,m);me.scale.set(x1-x0,1,z1-z0);me.position.set((x0+x1)/2,0,(z0+z1)/2);g.add(me)}
 return{dispose(){for(const m of mats){m.map?.dispose();m.dispose()}geo.dispose();s.remove(g)}}}

// 폴란드 전역: 바르샤바 밖 장소를 고르면 보이도록 z7 OSM 타일을 평평하게 아래에 깐다
function countryTiles(s){const Z=7,n2=2**Z,lonOf=x=>x/n2*360-180,latOf=y=>Math.atan(Math.sinh(Math.PI*(1-2*y/n2)))*180/Math.PI;const g=new THREE.Group();s.add(g);const loader=new THREE.TextureLoader();loader.setCrossOrigin('anonymous');const mats=[];const geo=new THREE.PlaneGeometry(1,1);geo.rotateX(-Math.PI/2);
 for(let x=68;x<=74;x++)for(let y=39;y<=44;y++){const x0=PX(lonOf(x)),x1=PX(lonOf(x+1)),z0=PZ(latOf(y)),z1=PZ(latOf(y+1));const m=new THREE.MeshBasicMaterial({color:0x6a6864,fog:false,visible:false});mats.push(m);loader.load(`https://tile.openstreetmap.org/${Z}/${x}/${y}.png`,tex=>{tex.colorSpace=THREE.SRGBColorSpace;m.map=tex;m.visible=true;m.needsUpdate=true});const me=new THREE.Mesh(geo,m);me.scale.set(x1-x0,1,z1-z0);me.position.set((x0+x1)/2,-60,(z0+z1)/2);me.renderOrder=-50;g.add(me)}
 return{dispose(){for(const m of mats){m.map?.dispose();m.dispose()}geo.dispose();s.remove(g)}}}

export async function titleMap(c,{onSelect,area,focus}={}){const{e,hud}=c;try{await Promise.race([Promise.all(['600 44px "Noto Serif KR"','24px "Noto Serif KR"','600 150px "Noto Serif KR"'].map(f=>document.fonts.load(f))),new Promise(r=>setTimeout(r,2500))])}catch{}const city=await getCity(c),d=city.data;const s=new THREE.Scene();s.background=new THREE.Color(0x0a0c0f);s.add(city.g);s.fog=city.fogObj;s.add(new THREE.HemisphereLight(0xd9dfe8,0x55544e,3.4));
 // 지형: 도시 재질에 높이를 넣고(장면에서는 uTerr=0이라 평평), 도시 바닥 대신 넓은 지형 격자를 깐다. 바깥 ±24 km는 그 위에 OSM 지도를 흐리게 깐다
 const TG=await loadTerrain();TERR.uTerr.value=1;
 city.g.traverse(o=>{if(!o.material||o===city.river)return;if(o===city.bld)terrainizeBld(o.material);else terrainize(o.material)});
 const hidden=[city.gw,city.ge,city.river];city.g.traverse(o=>{if(o.isMesh&&o.material===city.bankMat)hidden.push(o)});for(const o of hidden)o.visible=false;
 // 강: 큰 수면 평면 대신 강 선형을 따라 띠를 그린다(지형 0 m 높이). 도심 밖의 강은 바깥 지도 타일에 그려져 있다
 const rpos=[],ridx=[];for(const line of d.river||[]){const P=[];for(let i=0;i+1<line.length;i+=2)P.push([line[i],line[i+1]]);const b=rpos.length/3;for(let i=0;i<P.length;i++){const a=P[Math.max(0,i-1)],c2=P[Math.min(P.length-1,i+1)],dx=c2[0]-a[0],dz=c2[1]-a[1],L=Math.hypot(dx,dz)||1,nx=dz/L*190,nz=-dx/L*190;rpos.push(P[i][0]+nx,.05,P[i][1]+nz,P[i][0]-nx,.05,P[i][1]-nz);if(i){const k=b+(i-1)*2;ridx.push(k,k+1,k+2,k+1,k+3,k+2)}}}
 const tgeo=new THREE.BufferGeometry();tgeo.setAttribute('position',new THREE.Float32BufferAttribute(rpos,3));tgeo.setIndex(ridx);const tmat=terrainize(new THREE.MeshBasicMaterial({color:0x0b1118,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-.5,polygonOffsetUnits:-1}));s.add(new THREE.Mesh(tgeo,tmat));
 const farT=farTiles(s);const ctry=countryTiles(s);
 city.style({fog:0x10131a,fogD:.000022,sky:[.1,.108,.12],sun:[0,0,0],lit:.3,snow:.3,road:0x6a6a6e,walk:0x7a7874,ground:0x4a4a4c,park:0x3a4034,water:0x0a1016,bank:0x34332f,win:1});
 const rt=[];for(let i=0;i<d.route.length;i+=2)rt.push(new THREE.Vector3(d.route[i],2.5,d.route[i+1]));const line=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rt,false,'catmullrom',.01),700,9,5),terrainize(new THREE.MeshBasicMaterial({color:0xd9462f})));s.add(line);
 const east=city.bridgeLine?.at(-1)||d.anchors.bridgeE;const where=a=>Array.isArray(a)?a:a==='room'?[east[0]+150,east[1]-60]:a==='booth'?[east[0]+105,east[1]-10]:d.anchors[a];
 const items=[];const lineMats=[];
 for(const P of PLACES){
  if(P.kind==='scene'||P.kind==='point'||P.kind==='unknown'||(P.kind==='far'&&P.ll)){if(P.offmap)continue;const p=P.kind==='far'?[PX(P.ll[1]),PZ(P.ll[0])]:where(P.at);if(!p)continue;const big=P.kind==='scene',h=big?60:34;const sp=tag(P.label,'');sp.position.set(p[0],h+TH(p[0],p[1]),p[1]);sp.center.set(.5,0);s.add(sp);const mat=terrainize(new THREE.MeshBasicMaterial({color:IVORY}));const pin=new THREE.Mesh(big?new THREE.CylinderGeometry(4,4,60,6):new THREE.CylinderGeometry(3,3,34,6),mat);pin.position.set(p[0],h/2,p[1]);s.add(pin);items.push({P,type:'pin',sp,pin,mat,h,k:big?1:.78,x:p[0],z:p[1]})}
  else if(P.kind==='area'){const p=where(P.at);const m=groundText(P.label,P.id==='vistula'?900:1300);m.position.set(p[0],14+TH(p[0],p[1]),p[1]);s.add(m);items.push({P,type:'area',m,x:p[0],z:p[1]})}
  else if(P.kind==='street'){const pos=[],rpos=[];let sx=0,sz=0,n=0,x0=1e9,x1=-1e9,z0=1e9,z1=-1e9;for(const k of P.street)for(const seg of d.streets[k]||[])for(let i=0;i+3<seg.length;i+=2){pos.push(seg[i],12,seg[i+1],seg[i+2],12,seg[i+3]);rpos.push(seg[i],12+TH(seg[i],seg[i+1]),seg[i+1],seg[i+2],12+TH(seg[i+2],seg[i+3]),seg[i+3]);sx+=seg[i];sz+=seg[i+1];n++;x0=Math.min(x0,seg[i],seg[i+2]);x1=Math.max(x1,seg[i],seg[i+2]);z0=Math.min(z0,seg[i+1],seg[i+3]);z1=Math.max(z1,seg[i+1],seg[i+3])}
   if(!n)continue;const g=new LineSegmentsGeometry();g.setPositions(rpos);const mat=new LineMaterial({color:IVORY,linewidth:3,transparent:true,opacity:.5,depthTest:false});mat.resolution.set(innerWidth,innerHeight);lineMats.push(mat);const ls=new LineSegments2(g,mat);ls.renderOrder=6;ls.visible=false;s.add(ls);
   // 이름표는 선분 중심에 가장 가까운 꼭짓점에 둔다
   let bx=0,bz=0,bd=1e18;const mx=sx/n,mz=sz/n;for(let i=0;i<pos.length;i+=3){const dd=(pos[i]-mx)**2+(pos[i+2]-mz)**2;if(dd<bd){bd=dd;bx=pos[i];bz=pos[i+2]}}
   const sp=tag(P.label,'');sp.position.set(bx,20+TH(bx,bz),bz);sp.center.set(.5,0);sp.visible=false;s.add(sp);items.push({P,type:'street',ls,mat,sp,pos,x:bx,z:bz,box:[x0,x1,z0,z1],k:.7})}}
 const ring=new THREE.Mesh(new THREE.RingGeometry(60,74,48),new THREE.MeshBasicMaterial({color:AMBER,transparent:true,opacity:.85,depthTest:false,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.renderOrder=8;terrainize(ring.material);ring.visible=false;s.add(ring);
 const ct=e.controls;ct.mode='orbit';Object.assign(ct.orbit,{t:new THREE.Vector3(-650,0,-450),yaw:.3,pitch:.95,dist:7000,min:500,max:12000,panDrag:true});ct.onTouch=()=>{fly=null};
 let sel=null,hover=null,fly=null,kind='scene';const v=new THREE.Vector3();const cam=e.camera;const pins=items.filter(q=>q.type==='pin');
 const tiles=tileLayer(s,e,ct);
 // 거리의 사람과 차. 지도 거리에서도 보이게 키운다. 색은 낮은 채도(연출)
 const pairs=a=>{const o=[];for(let i=0;i+1<a.length;i+=2)o.push([a[i],a[i+1]]);return o};
 const walkP=[];for(const k of['Nowy Świat','Krakowskie Przedmieście','Foksal','Chmielna','Świętokrzyska','Mikołaja Kopernika','Tamka','Saska','Francuska'])for(const q of d.streets[k]||[])if(q.length>3)walkP.push(pairs(q));
 const carP=d.roads.filter(r=>r[0]<=1&&r.length>8).map(r=>pairs(r.slice(2))).filter(p=>p.length>1);
 const tramP=(d.tram||[]).map(pairs).filter(p=>p.length>3);
 const movers=[];
 if(walkP.length)movers.push(new Crowd(s,walkP,900,{palette:COATS.map(c=>c+0x383838),spd:5,scale:7,lane:16}));
 const boxG=(w,h,l)=>{const g=new THREE.BoxGeometry(w,h,l);g.translate(0,h/2,0);return g};
 if(carP.length)movers.push(new Crowd(s,carP,160,{palette:CARS.map(c=>c+0x202020),geo:boxG(1.5,1.3,3),spd:40,scale:4,lane:8}));
 if(tramP.length)movers.push(new Crowd(s,tramP,12,{palette:[0xa4473c,0xa4473c,0xcbbf9c],geo:boxG(2.4,3.2,13.5),spd:30,scale:1.6,lane:0}));
 {const bp=[];for(let i=0;i+1<d.route.length;i+=2)bp.push([d.route[i],d.route[i+1]]);movers.push(new Crowd(s,[bp],4,{palette:[0xa8483c],geo:boxG(2.5,3,12),spd:35,scale:1.8,lane:4}))}
 for(const m of movers)terrainize(m.m.material);
 const placeCam=()=>{const o=ct.orbit,cp=Math.cos(o.pitch);cam.fov=32;cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();cam.position.set(o.t.x+Math.sin(o.yaw)*cp*o.dist,Math.sin(o.pitch)*o.dist,o.t.z+Math.cos(o.yaw)*cp*o.dist);cam.lookAt(o.t);cam.updateMatrixWorld()};
 const flyTo=(t1,d1,yaw1)=>{const o=ct.orbit;fly={t:t1,dist:d1,k:0,t0:o.t.clone(),d0:o.dist,y0:o.yaw,y1:yaw1??o.yaw}};
 // 장면 핀이 모두 메뉴와 겹치지 않는 빈 영역에 들어오도록 거리와 중심을 맞춘다
 const homePins=pins.filter(q=>q.P.kind==='scene');
 const fit=(A)=>{const o=ct.orbit;o.t.set(0,0,0);for(const q of homePins){o.t.x+=q.x/homePins.length;o.t.z+=q.z/homePins.length}
  for(let i=0;i<40;i++){placeCam();let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const q of homePins){v.set(q.x,0,q.z).project(cam);const sx=(v.x+1)/2*innerWidth,sy=(1-v.y)/2*innerHeight;x0=Math.min(x0,sx-60);x1=Math.max(x1,sx+60);y0=Math.min(y0,sy-70);y1=Math.max(y1,sy+10)}
   const scale=Math.max((x1-x0)/(A.r-A.l),(y1-y0)/(A.b-A.t));o.dist=THREE.MathUtils.clamp(o.dist*Math.pow(scale,.6),o.min,o.max);placeCam();ct.panBy((A.l+A.r)/2-(x0+x1)/2,(A.t+A.b)/2-(y0+y1)/2)}return o.dist};
 // 휴대폰 세로 화면에서는 장소들이 길게 놓이도록 지도를 돌려 가장 크게 보이는 방향을 고른다
 const home=(animate=true)=>{const o=ct.orbit,A=area?area():{l:24,t:24,r:innerWidth-24,b:innerHeight-24};const t0=o.t.clone(),d0=o.dist,y0=o.yaw;o.max=60000;let best=null;for(const yaw of innerWidth<=640?[.3,.3-Math.PI/2,.3+Math.PI/2,.3-Math.PI/4,.3+Math.PI/4]:[.3]){o.yaw=yaw;const dd=fit(A)*(yaw===.3?.8:1);if(!best||dd<best.d)best={d:dd,yaw,t:o.t.clone(),dist:Math.min(o.dist,14000)}}o.max=34000;
  o.yaw=best.yaw;if(animate){o.t.copy(t0);o.dist=d0;const dy=Math.atan2(Math.sin(best.yaw-y0),Math.cos(best.yaw-y0));o.yaw=best.yaw-dy;flyTo(best.t,best.dist,best.yaw)}else{o.t.copy(best.t);o.dist=best.dist}};
 const scr0=(x,y,z)=>{v.set(x,y,z).project(cam);return v.z>1?null:[(v.x+1)/2*innerWidth,(1-v.y)/2*innerHeight]};const scr=(x,y,z)=>scr0(x,y+TH(x,z),z);
 // 화면 좌표로 고른다. 핀은 이름표나 기둥, 구역은 글자 둘레, 거리는 보일 때만 선 둘레 10px
 const pick=()=>{const W=innerWidth,H=innerHeight,px=(e.pointer.x+1)/2*W,py=(1-e.pointer.y)/2*H;const lh=H*.0573,lw=H*.09;let best=null,bd=1e9;
  for(const q of items){let dd=1e9;
   if(q.type==='pin'){if(!q.pin.visible)continue;const a=scr(q.x,q.h,q.z);if(!a)continue;const g=scr(q.x,0,q.z);const inLabel=Math.abs(px-a[0])<lw*q.k&&py<a[1]+4&&py>a[1]-lh*q.k;const dPin=g&&Math.abs(px-a[0])<22&&py>a[1]-4&&py<g[1]+16;if(inLabel||dPin)dd=Math.abs(px-a[0])+Math.abs(py-a[1])}
   else if(q.type==='area'){const a=scr(q.x,14,q.z);if(a&&Math.abs(px-a[0])<70&&Math.abs(py-a[1])<22)dd=200+Math.abs(px-a[0])}
   else if(q.type==='street'&&q.ls.visible){for(let i=0;i<q.pos.length;i+=6){const a=scr(q.pos[i],12,q.pos[i+2]),b=scr(q.pos[i+3],12,q.pos[i+5]);if(!a||!b)continue;const ax=b[0]-a[0],ay=b[1]-a[1],L2=ax*ax+ay*ay||1;const t=Math.max(0,Math.min(1,((px-a[0])*ax+(py-a[1])*ay)/L2));const dx=a[0]+ax*t-px,dy=a[1]+ay*t-py,dist=Math.hypot(dx,dy);if(dist<10)dd=Math.min(dd,100+dist)}}
   if(dd<bd){bd=dd;best=q}}return best};
 const paint=()=>{for(const q of items){const on=q===sel||q===hover;
   if(q.type==='pin'){q.mat.color.setHex(on?AMBER:IVORY);q.sp.material.opacity=sel&&!on?.55:1}
   else if(q.type==='area'){q.m.material.color.setHex(on?AMBER:IVORY);q.m.material.opacity=on?.8:.42}
   else{const show=on||kind==='street';q.ls.visible=show;q.sp.visible=show&&(on||ct.orbit.dist<3200);q.mat.color.setHex(on?AMBER:IVORY);q.mat.opacity=on?1:.45;q.mat.linewidth=on?5:3}}
  if(sel&&sel.type!=='street'){ring.position.set(sel.x,1.5,sel.z);ring.visible=true}else ring.visible=false};
 const select=(id,{move=true}={})=>{const q=items.find(x=>x.P.id===id)||null;sel=q;paint();if(!q||!move)return;const o=ct.orbit;let tx=q.x,tz=q.z,d1=Math.min(o.dist,innerWidth>920?1800:2600);
  if(q.P.kind==='far'){o.max=1.2e6;tx=q.x*.5;tz=q.z*.5;d1=Math.hypot(q.x,q.z)*1.9}else if(q.type==='street'){const[x0,x1,z0,z1]=q.box;tx=(x0+x1)/2;tz=(z0+z1)/2;d1=THREE.MathUtils.clamp(Math.max(x1-x0,z1-z0)*2.2,700,6000)}else if(q.type==='area')d1=Math.max(d1,3200);
  const F=focus?focus():{x:innerWidth/2,y:innerHeight/2},k=d1*Math.tan(16*Math.PI/180)*2/innerHeight,sn=Math.sin(o.yaw),cs=Math.cos(o.yaw),ax=(F.x-innerWidth/2)*k,ay=(innerHeight/2-F.y)*k/Math.max(.35,Math.sin(o.pitch));flyTo(new THREE.Vector3(tx-cs*ax+sn*ay,0,tz+sn*ax+cs*ay),d1)};
 const POST={grain:.012,vig:.26,sat:.9,bloom:.42,exposure:1.15};
 const sc={scene:s,fov:32,far:3000000,near:10,keep:true,ownCursor:true,imagineFn:()=>!!sel?.P.imagined,post:POST,marks:[],panel:[],
  update(dt){const o=ct.orbit;if(fly){fly.k=Math.min(1,fly.k+dt/1.1);const q=fly.k*fly.k*(3-2*fly.k);o.t.lerpVectors(fly.t0,fly.t,q);o.dist=fly.d0+(fly.dist-fly.d0)*q;o.yaw=fly.y0+(fly.y1-fly.y0)*q;if(fly.k>=1)fly=null}o.t.x=THREE.MathUtils.clamp(o.t.x,-600000,600000);o.t.z=THREE.MathUtils.clamp(o.t.z,-600000,600000);{const fd=.000022*Math.min(1,9000/o.dist);city.fogObj.density=fd;if(city.s?.mat?.uniforms?.uFogD)city.s.mat.uniforms.uFogD.value=fd}o.t.y=TH(o.t.x,o.t.z);
   for(const q of items)if(q.sp){const k=e.camera.position.distanceTo(q.sp.position)*(q.k||1);q.sp.scale.set(k*.14,k*.033,1)}
   for(const m of lineMats)m.resolution.set(innerWidth,innerHeight);for(const q of pins)if(q.P.kind==='unknown'||q.P.kind==='far'){const v=q.P.kind==='far'?kind==='far'||q===sel:kind==='unknown'||q===sel||q===hover||o.dist<2500;q.sp.visible=v;q.pin.visible=v}if(kind==='street')for(const q of items)if(q.type==='street')q.sp.visible=q===sel||q===hover||o.dist<3200;
   const tt=performance.now()/1000,far=o.dist>4500;for(const[i,m]of movers.entries()){const v=!(i===0&&far);m.m.visible=v;if(v)m.update(dt,tt)}
   // 이름표끼리 겹치면 우선순위가 낮은 쪽을 숨긴다(선택·마우스 > 장면 > 지점 > 추정 > 거리)
   let placed=[];{const rank=q=>q===sel||q===hover?0:q.P.kind==='scene'?1:q.P.kind==='point'?2:q.P.kind==='unknown'?3:4;for(const q of pins)if(q.P.kind!=='unknown'&&q.P.kind!=='far')q.sp.visible=true;const L=items.filter(q=>q.sp&&q.sp.visible).sort((a,b)=>rank(a)-rank(b));
    for(const q of L){const p=q.sp.position;const a=scr0(p.x,p.y,p.z),rx=cam.matrixWorld.elements,sx=q.sp.scale.x,side=scr0(p.x+rx[0]*sx,p.y+rx[1]*sx,p.z+rx[2]*sx);if(!a||!side){q.sp.visible=false;continue}const fw=Math.hypot(side[0]-a[0],side[1]-a[1]),h=fw*120/512,w=fw*(q.sp.userData.tw||.5)+6;const r=[a[0]-w/2,a[1]-h,a[0]+w/2,a[1]-h*.5];
     if(placed.some(s=>r[0]<s[2]&&r[2]>s[0]&&r[1]<s[3]&&r[3]>s[1])){q.sp.visible=false;continue}placed.push(r)}}
   // 바닥에 쓴 구역 이름은 맨 나중에 놓는다. 네 모서리를 투영한 사각형이 다른 이름표와 겹치면 숨긴다
   for(const q of items){if(q.type!=='area')continue;const g=q.m.geometry.parameters,hw=g.width/2,hh=g.height/2;const cs=[[-hw,-hh],[hw,-hh],[hw,hh],[-hw,hh]].map(([dx,dz])=>scr(q.x+dx,14,q.z+dz));if(cs.some(x=>!x)){q.m.visible=false;continue}const xs=cs.map(x=>x[0]),ys=cs.map(x=>x[1]);const r=[Math.min(...xs)+.18*(Math.max(...xs)-Math.min(...xs)),Math.min(...ys),Math.max(...xs)-.18*(Math.max(...xs)-Math.min(...xs)),Math.max(...ys)];const hit=q!==sel&&placed.some(s=>r[0]<s[2]&&r[2]>s[0]&&r[1]<s[3]&&r[3]>s[1]);q.m.visible=!hit;if(!hit)placed.push(r)}
   tiles.update();
   if(e.pointerSeen){const h=pick();if(h!==hover){hover=h;paint()}e.canvas.style.cursor=h?'pointer':''}},
  onClick(){const q=pick();if(q){select(q.P.id);onSelect?.(q.P.id)}}};
 home(false);await c.enter(sc,{fade:1.8});
 return{select,home,clear(){sel=null;paint()},
  showKind(k){kind=k;paint()},
  // 원문이 가리키는 지점의 위경도. 바르샤바 밖은 ll, 지도 위 항목은 핀·이름표 좌표로 역변환한다
  latlon(id){const P=PLACES.find(x=>x.id===id);if(!P||P.nolink)return null;if(P.ll)return P.ll;const q=items.find(x=>x.P.id===id);return q?toLL(q.x,q.z):null},
  overlay:{get on(){return tiles.on},set(v){tiles.set(v);e.post(v?{...POST,sat:1,bloom:.12}:POST)},opacity:a=>tiles.opacity(a),stats:()=>tiles.stats()},
  async leave(){TERR.uTerr.value=0;for(const o of hidden)o.visible=true;farT.dispose();ctry.dispose();tgeo.dispose();tmat.dispose();ct.onTouch=null;ct.orbit.panDrag=false;e.canvas.style.cursor='';await hud.fade(true,c.auto?.02:.9);c.dispose();tiles.dispose();for(const m of movers){m.m.geometry.dispose();m.m.material.dispose();m.m.dispose()}s.remove(city.g);hud.imagine(false)}}}
