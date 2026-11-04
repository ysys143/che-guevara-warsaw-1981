import * as THREE from 'three';
import * as T from '../core/tex.js';
import {std,box,plane,hot,hotBox,room,fluorescent,radiator,table,chair,figure,smokeLayer,dust} from '../core/kit.js';
import {A,B,C,D} from './shared.js';
const F=[0,3.6,7.2]; // 지상층, 그 위층, 맨 위층 (부록 C 4·8번)
export function buildStrike(c,{night=false}={}){const s=new THREE.Scene();s.background=new THREE.Color(night?0x020304:0x07080a);s.fog=new THREE.FogExp2(0x24241f,.022);
 const floor=std(0x7a7770,{map:T.concrete([6,2]),roughness:.75}),ceil=std(0x74716a),paint=()=>std(0xffffff,{map:T.oilWall(),roughness:.55});
 const g=new THREE.Group();s.add(g);const hots=[],lights=[];const walkMeshes=[];
 const fig=[];
 // 긴 복도 세 개를 같은 평면에 쌓는다. z 범위 -1.5..1.5, x 범위 -20..20
 for(let i=0;i<3;i++){const y=F[i];const r=room(40,3,3.3,{wall:paint(),floor,ceil,open:i==1?{n:true}:i==2?{s:true,e:true}:{}});r.position.set(0,y,0);g.add(r);walkMeshes.push(r.floorMesh);const pw=(w,x,z)=>g.add(plane(w,3.3,paint(),x,y+1.65,z,z>0?Math.PI:0));if(i==1){pw(5,-17.5,-1.5);pw(13,13.5,-1.5)}if(i==2){pw(4,-18,1.5);pw(20,10,1.5)}for(let x=-16;x<=16;x+=(night?16:8)){const l=fluorescent(x,y+3.25,0,{i:night?1.2:3.4,dist:11});g.add(l);lights.push(l)}}
 // 위층 강의실 (맨 위층, z 1.5..11)
 const cr=room(16,9.5,3.3,{wall:paint(),floor:std(0x6d675c,{map:T.parquet([6,5])}),ceil,open:{n:true,s:true}});cr.position.set(-8,F[2],6.25);g.add(cr);walkMeshes.push(cr.floorMesh);
 g.add(box(16,1.1,.2,std(0xb7b09a),-8,F[2]+.55,11),box(16,.4,.2,std(0xb7b09a),-8,F[2]+3.1,11));for(let i=0;i<5;i++)g.add(box(.5,1.9,.2,std(0xb7b09a),-16+i*4,F[2]+2,11));
 for(let i=0;i<4;i++){const gl=plane(3.5,1.9,new THREE.MeshStandardMaterial({color:0x202428,roughness:.1,metalness:.3,transparent:true,opacity:.5}),-14+i*4,F[2]+2,11,Math.PI);g.add(gl)}
 const ext=new THREE.Group();const bl=std(night?0x06070a:0x1b1d20);for(let i=0;i<7;i++){const w=14+((i*7)%10),h=14+((i*5)%16);const b=box(w,h,10,bl,-30+i*17,F[2]+h/2-6,42+((i*3)%14));ext.add(b);if(!night){}for(let k=0;k<9;k++){const lit=new THREE.Mesh(new THREE.PlaneGeometry(.9,1.2),new THREE.MeshBasicMaterial({color:0xc58f45}));lit.position.set(b.position.x-w/2+1+((k*37)%(w-2)),F[2]-5+((k*53)%(h-2)),b.position.z-5.05);lit.rotation.y=Math.PI;if((k+i)%3==0)ext.add(lit)}}
 for(let i=0;i<9;i++){const t=new THREE.Mesh(new THREE.PlaneGeometry(8,14),new THREE.MeshBasicMaterial({map:T.tree(i+40),transparent:true,alphaTest:.4,side:THREE.DoubleSide}));t.position.set(-30+i*7,F[2]-1,22+(i%3)*4);ext.add(t)}
 const gnd=plane(120,120,std(0x4f4a42,{map:T.snow([9,9]),color:0x7d786c}),0,F[2]-8,50,0,-Math.PI/2);ext.add(gnd);g.add(ext);const sky=plane(180,60,new THREE.MeshBasicMaterial({color:night?0x050608:0x24272a,fog:false}),0,F[2]+6,70,Math.PI);g.add(sky);
 g.add(radiator(-9,F[2],10.75,Math.PI,2.6));
 for(const x of[-13,-8,-3])for(const z of[3.5,7.5]){const l=fluorescent(x,F[2]+3.25,z,{i:night?.8:2.2,dist:11});g.add(l);lights.push(l)}s.add(new THREE.HemisphereLight(0xa8a896,0x45403a,night?.4:.95));
 const beds=[];const bag=std(0x3a4c3a,{roughness:1}),bag2=std(0x5b3a2a,{roughness:1});for(let i=0;i<8;i++){const x=-14+(i%4)*4,z=4+((i/4|0))*3.2;const t=table(2,.9,.72);t.position.set(x,F[2],z);g.add(t);if(i!=6){const b=box(1.8,.14,.72,i%2?bag:bag2,x,F[2]+.82,z);g.add(b);beds.push(b)}}
 // 서술자의 탁자 (라디에이터 옆)
 const mine=table(2,.9,.72);mine.position.set(-9,F[2],9.6);g.add(mine);g.add(box(1.8,.14,.72,bag,-9,F[2]+.82,9.6));const book=box(.16,.03,.22,std(0x6a2f25),-8.6,F[2]+.91,9.5);g.add(book);
 // 화장실 (맨 위층, 동쪽 끝)
 const wc=room(4.5,3,3.3,{wall:std(0xffffff,{map:T.oilWall('#a7a18c','#5a5f4d'),roughness:.5}),floor,ceil,open:{w:true}});wc.position.set(22.25,F[2],0);g.add(wc);g.add(box(.05,2,1.2,std(0x4a4a3c),22,F[2]+1,.9),box(.05,2,1.2,std(0x4a4a3c),23.4,F[2]+1,.9));const wl=fluorescent(22,F[2]+3.2,0,{i:.7,dist:5});g.add(wl);
 // 강당 (가운데 층, z -14..-1.5)
 const hall=room(22,12.5,4.2,{wall:paint(),floor,ceil,open:{s:true}});hall.position.set(-4,F[1],-7.75);g.add(hall);walkMeshes.push(hall.floorMesh);for(let x=-11;x<=3;x+=7)for(const z of[-5,-11]){const l=fluorescent(x,F[1]+4.1,z,{i:night?1:1.7,dist:12});g.add(l)}
 g.add(box(6,.5,2.4,std(0x4a3a2a,{map:T.wood()}),-4,F[1]+.25,-12.7));const lect=box(.8,1.1,.5,std(0x3a2a1d),-4,F[1]+1.05,-12.6);g.add(lect);
 const silh=[];const mkCrowd=(n,x0,x1,z0,z1,y,o={})=>{const R=T.rng(n*7+x0|0);for(let i=0;i<n;i++){const p=figure({coat:[0x141416,0x1a1712,0x101518,0x1c1a18][i%4],h:1.62+R()*.2,skin:0x4a4640,...o});p.position.set(x0+R()*(x1-x0),y,z0+R()*(z1-z0));p.rotation.y=R()*6.3;p.ph=R()*6;g.add(p);silh.push(p)}};
 if(!night){mkCrowd(26,-13,5,-11,-3,F[1]);for(const p of silh)p.rotation.y=Math.PI;mkCrowd(11,-14,14,-1,1,F[1]);mkCrowd(5,-3,-1,-1,1,F[0])}
 // 게시판과 벽보 (글자는 읽히지 않는다, 부록 C 29번)
 const bd=plane(3,1.5,std(0xffffff,{map:T.newspaper(6)}),15.5,F[1]+1.7,-1.46,0);g.add(box(3.1,1.6,.03,std(0x3a2a1d),15.5,F[1]+1.7,-1.49),bd);
 // 지상층 — 출입문, 당직자, 공중전화, 매점, 탁구대
 const door=box(1.9,2.4,.08,std(0x3a2a1d,{map:T.wood()}),-19.9,F[0]+1.2,0);door.rotation.y=Math.PI/2;g.add(door);const duty=table(1.3,.6,.8);duty.position.set(-17.3,F[0],-1);g.add(duty);const guard=figure({coat:0x1c2024,skin:0x4a4640});guard.position.set(-17.3,F[0],-1.35);g.add(guard);
 const ph1=box(.4,.55,.16,std(0x2b2b2d),4,F[0]+1.45,-1.42),ph2=box(.4,.55,.16,std(0x2b2b2d),6.6,F[0]+1.45,-1.42);g.add(ph1,ph2);if(!night)mkCrowd(7,3,10,-1.3,-.6,F[0]);
 g.add(box(.08,2.3,1.3,std(0x2c2620,{map:T.wood('#2c2620')}),19.9,F[1]+1.15,0));g.add(box(4,1,.5,std(0x5b4a35),14,F[0]+.5,1.15));const cook=figure({coat:0x8a8678,skin:0x4a4640});cook.position.set(14,F[0],1.3);g.add(cook);
 const pp=table(2.7,1.5,.76,{top:std(0x28403a)});pp.position.set(-7,F[0],-.55);g.add(pp);
 // 계단실: x=-1..1 칸막이 대신 표시. 층계참(중2층)은 어둡다
 const ld=room(7,2.6,2.5,{wall:paint(),floor,ceil});ld.position.set(34,F[0]+1.8,0);g.add(ld);g.add(box(.9,2.3,.05,std(0x0a0a0b),37.45,F[0]+2.95,0));const ll=new THREE.PointLight(0xb9b48f,.8,5,1.8);ll.position.set(32,F[0]+3.9,0);g.add(ll);
 const marks=[A([-9,F[2]+1.2,9.6],'라디에이터 옆 탁자 ¶67',8),A([0,F[0]+.1,-.5],'콘크리트 바닥 ¶69',7),C([-2,F[2]+2.4,11],'창밖 아파트의 배치',10),B([0,F[1]+2.5,-1.5],'스타프키의 학교 건물 [S40]. 실내 구조는 상상',16),A([5,F[0]+1.7,-1.2],'공중전화 두 대 ¶67',8),A([23,F[2]+2,-1.4],'벗겨진 유성페인트 ¶69',7)];
 const imagined=[{p:[0,F[0]+1.5,0],d:40},{p:[0,F[1]+1.5,0],d:40},{p:[0,F[2]+1.5,0],d:40},{p:[-8,F[2]+1.5,6],d:12}];
 const nav={[0]:[[-19.3,19.3,-1.3,1.3]],[1]:[[-19.3,19.3,-1.3,1.3],[-14.6,6.6,-13,-1.2]],[2]:[[-19.3,24,-1.2,1.2],[-15.6,-.5,1.1,10.4]]};const blocks=[[-10.15,-7.85,9.05,10.15,F[2],F[2]+3],[-8.4,-5.6,-1.35,.25,F[0],F[0]+3],[-18,-16.6,-1.4,-.6,F[0],F[0]+3],[12,16,.8,1.5,F[0],F[0]+3],[-7.2,-.8,-13.9,-11.5,F[1],F[1]+3]];for(let i=0;i<8;i++){if(i==6)continue;const x=-14+(i%4)*4,z=4+((i/4|0))*3.2;blocks.push([x-1.1,x+1.1,z-.55,z+.55,F[2],F[2]+3])}
 // 고정 조명은 가까운 7개만 켠다. 조명 수를 바꾸지 않아 셰이더 재컴파일이 없다
 g.updateMatrixWorld(true);const fix=[];const del=[];g.traverse(o=>{if(o.isPointLight){const p=new THREE.Vector3();o.getWorldPosition(p);fix.push({p,i:o.intensity,d:o.distance,c:o.color.clone()});del.push(o)}});del.forEach(o=>o.parent.remove(o));const pool=[];for(let i=0;i<7;i++){const l=new THREE.PointLight(0xffffff,0,8,1.6);s.add(l);pool.push(l)}const relight=(cam,mul=1)=>{const f2=fix.map(q=>({q,k:q.p.distanceTo(cam)+(Math.abs(q.p.y-cam.y)>2.6?30:0)})).sort((a,b)=>a.k-b.k);pool.forEach((l,i)=>{const q=f2[i].q;l.position.copy(q.p);l.intensity=q.i*mul*1.25;l.distance=q.d*1.2;l.color.copy(q.c)})};
 return{s,g,hots,F,nav,blocks,relight,marks,imagined,walkMeshes,silh,door,ph1,ph2,book,duty,cook,lights};
}
export async function stageStrike(c){const{e,a,hud}=c,B0=buildStrike(c),{s,g,F:FF,nav,silh,door}=B0;const ct=e.controls;
 let upd=[smokeLayer(s,[-19,19,FF[1]+1.2,FF[1]+3,-1.3,1.3],16,{op:.16,size:3}),smokeLayer(s,[-14,6,FF[1]+1.5,FF[1]+4,-13,-2],16,{op:.14,size:6}),smokeLayer(s,[-19,19,FF[0]+1.2,FF[0]+3,-1.3,1.3],6,{op:.1,size:3}),dust(s,[-15,0,FF[2]+.2,FF[2]+3,1.5,10],160,0xfff0d0,.02,.3,.02)];
 const floorOf=()=>ct.pos.y>FF[2]-1?2:ct.pos.y>FF[1]-1?1:0;const setFloor=(n,x=null,z=null)=>{ct.pos.y=FF[n];ct.nav=nav[n];if(x!=null){ct.pos.x=x;ct.pos.z=z}};
 const sc={scene:s,fov:62,post:{grain:.04,vig:.5,sat:.62,tint:[1,.98,.9],bloom:.3,exposure:1.05},hots:B0.hots,marks:B0.marks,imagineAll:true,panel:[['우리의 파업은, 그러니까 변두리의 저항이었다.','¶11'],['끝없는 순환이 이어졌다.','¶71'],['그 차갑고 거친 바닥은 오래전, 이 심리학부 건물에 게슈타포 본부가 들어서던 시절에 깔린 것이었다.','¶69']],
  update(dt,t){B0.relight(e.camera.position);upd.forEach(u=>u(dt));if(ct.mode==='walk'&&!ct.lockMove)for(const p of silh){if(Math.abs(p.position.y-ct.pos.y)>.5)continue;const dx=ct.pos.x-p.position.x,dz=ct.pos.z-p.position.z,dd=Math.hypot(dx,dz);if(dd<.72&&dd>.01){const nx=ct.pos.x+dx/dd*dt*1.5,nz=ct.pos.z+dz/dd*dt*1.5;if(ct.inside(nx,ct.pos.z))ct.pos.x=nx;if(ct.inside(ct.pos.x,nz))ct.pos.z=nz}}for(const p of silh){p.children[0].position.y=.12+Math.sin(t*1.3+p.ph)*.006;p.rotation.y+=Math.sin(t*.4+p.ph)*.0012}const f=floorOf();a.set('murmur',{gain:f==1?.12:f==0?.09:.05});a.set('hum',{gain:.03})}};
 e.floorPick=B0.walkMeshes;
 const S=(w,h,d,x,y,z,label,use,opt)=>{const o=hotBox(w,h,d,x,y,z,label,use,opt);g.add(o);sc.hots.push(o);return o};
 ct.mode='walk';ct.surface='concrete';ct.speed=1.9;ct.place(-8,FF[2],8.4,0,0);ct.nav=nav[2];ct.blocks=B0.blocks;
 a.loop('hum',{type:'white',freq:120,q:12,filter:'bandpass',gain:.03});a.loop('murmur',{type:'brown',freq:650,q:.6,gain:.05,lfo:.25,lfoDepth:.015});a.muffledBeat(.05);
 const pingT=setInterval(()=>{if(floorOf()==0&&Math.random()<.8)a.ping()},640),gtrT=setInterval(()=>{if(Math.random()<.4)a.guitar()},9000);
 await c.enter(sc);hud.showTools(true);c.hint('W A S D 또는 바닥 클릭으로 걷기 · 끌기 또는 Z C로 돌기 · E 또는 클릭으로 하기');
 await c.say('스타프키 거리, 심리학부. 우리는 탁자 위에서 잤다.',{ref:'¶5, ¶11'});c.sfx('벽 너머의 먹먹한 음악, 탁구공, 낮은 웅성거림',6);
  // 순환: 탁자, 화장실, 강당, 전화 줄, 매점. 어느 순서든 된다
 const timers=[];let over=false;const done=new Set();let cycles=0;const need=['table','wc','hall','phone','bar'];
 const LINES={table:['《돌차기 놀이》를 또 펼쳤다. 사건들의 순서가 늘 일정할 필요는 없다.','¶71'],wc:['벗겨진 유성페인트를 멍하니 바라보았다. 문고리를 잡아당기는 소리가 나면 숨을 죽였다.','¶69'],hall:['표결. 위원장의 나무 굽이 콘크리트 바닥을 쿵쿵 울린다.','¶69'],phone:['줄을 선다. 엄마는 주문이라도 외듯이 같은 말을 되풀이했다. 집으로 돌아와라.','¶67'],bar:['줄을 포기하고 매점으로 갔다가, 다시 돌아와 줄을 선다.','¶71']};
 const act=(id)=>async()=>{done.add(id);c.say(LINES[id][0],{ref:LINES[id][1]});if(id==='hall'){a.hit({freq:200,q:1,dur:.12,gain:.25,type:'brown'});a.hit({freq:200,q:1,dur:.12,gain:.25,type:'brown',when:.5})}if(id==='phone')a.beep({freq:425,dur:.3,gain:.04});if(done.size>=need.length){cycles++;done.clear();for(const k of Object.values(spots))k.userData.hot.on=true;check()}else{timers.push(setTimeout(()=>{if(!over)spots[id].userData.hot.on=true},15000/(c.auto?100:1)))}};
 const spots={table:S(2,1,1,-9,FF[2]+1,9.6,'내 탁자에 눕는다',act('table')),wc:S(1,2,2.4,23.6,FF[2]+1.2,0,'화장실 칸에 앉는다',act('wc')),hall:S(3,2,3,-4,FF[1]+1.2,-9,'강당에서 손을 든다',act('hall'),{range:7}),phone:S(3.4,1.6,.6,5.2,FF[0]+1.3,-1.1,'전화 줄에 선다',act('phone')),bar:S(2,1,1,14,FF[0]+1,.9,'매점으로 간다',act('bar'))};
 const stairTo=(from,to)=>async()=>{ct.lockMove=true;await hud.fade(true,c.auto?.02:.45);a.step('stair');a.step('stair');if(from+to==1){ct.pos.set(31.2,FF[0]+1.8,0);ct.yaw=-Math.PI/2;ct.pitch=0;await hud.fade(false,c.auto?.02:.35);c.sfx('어두운 층계참, 짧은 복도',2);await c.wait(1.3);a.step('stair');await hud.fade(true,c.auto?.02:.35)}setFloor(to,12.2,0);ct.yaw=from<to?-Math.PI/2:Math.PI/2;await hud.fade(false,c.auto?.02:.5);ct.lockMove=false};
 for(let i=0;i<3;i++){const mesh=box(1.4,2.5,.1,std(0x0b0b0c),11.3,FF[i]+1.25,-1.44);g.add(mesh);if(i<2){const up=S(1.4,2.5,.3,11.3,FF[i]+1.25,-1.3,i==0?'위층으로 (층계참을 지나)':'맨 위층으로',stairTo(i,i+1),{once:false,range:2.4})}const dn=i>0?S(1.4,2.5,.3,13,FF[i]+1.25,-1.3,i==1?'아래층으로':'아래층으로 (강당 층)',stairTo(i,i-1),{once:false,range:2.4}):null;g.add(box(1.4,2.5,.1,std(0x0b0b0c),13,FF[i]+1.25,-1.44))}
 const check=async()=>{if(cycles==1){await c.wait(3);await c.say('다른 사람들도 나처럼 하고 있다는 느낌이 들었다.',{ref:'¶71',quote:true})}};
 if(c.auto){cycles=1}
 const NM={table:'내 탁자 (맨 위층 강의실)',wc:'화장실 (맨 위층 동쪽 끝)',hall:'강당 (가운데 층)',phone:'전화 줄 (지상층)',bar:'매점 (지상층)'};const hintT=setInterval(()=>{if(cycles>=1)return;const r=need.filter(k=>!done.has(k)).map(k=>NM[k]);c.hint(innerWidth<640?'남은 곳 '+r.length+'개. 계단은 복도 동쪽':'남은 순환: '+r.join(' · ')+'  |  계단은 복도 동쪽')},800);await c.walkUntil(()=>cycles>=1,{after:240,fn:()=>{cycles=1;check()},adv:()=>{const k=need.find(x=>!done.has(x)&&spots[x].userData.hot.on!==false);if(k)e.useHot(spots[k]);else{cycles=1;check()}}});clearInterval(hintT);
 over=true;timers.forEach(clearTimeout);for(const k of Object.values(spots))k.userData.hot.on=false;
 await c.wait(c.auto?1:6);setFloor(1,-4,-4);ct.yaw=0;ct.target=null;await c.say('강당 집회. 파업 중인 자원봉사자에게 외출증을 나누어 준다.',{ref:'¶5'});a.clink();await c.wait(1);
 // 2단계. 외출증
 await c.say('명단에 내 이름이 있다. 아래층 문으로 간다.',{ref:'¶5'});setFloor(0,12.2,0);ct.yaw=Math.PI/2;c.hint('지상층 서쪽 끝, 당직자에게 간다');
 const gate=S(1.6,2,2,-17.7,FF[0]+1.2,0,'당직자에게 외출증을 보인다',null,{range:2.8});await c.until(gate,{timeout:90});a.hit({freq:1600,q:3,dur:.05,gain:.2});await c.wait(.3);a.hit({freq:900,q:4,dur:.12,gain:.25});a.stopBeat();clearInterval(pingT);clearInterval(gtrT);
 await c.say('당직자가 명부에서 내 이름을 확인하고 열쇠로 문을 열었다.',{ref:'¶5'});ct.lockMove=true;a.stop('murmur',.2);a.stop('hum',.2);await hud.fade(true,c.auto?.02:.2);c.dispose();await stageGarden(c);}
// 방문 사이의 탁자. 라디에이터 옆에 누워 창을 본다 (7장 5단계, ¶73–75)
const TABLE=[['창 너머 도시는 점점 어두워졌고, 유리창에는 서늘한 빛이 번들거렸다.','¶73'],['그때 내게 필요했던 건 부드러움이었다.','¶75'],['날마다 탁자 위에서 자는 바람에 뼈마디가 쑤셨다.','¶75 줄임'],['겉보기에는 아무것도 달라지지 않는 듯했다.','¶107']];
export async function stageTable(c,n){const{e,a}=c,B0=buildStrike(c),{s,F:FF}=B0;const ct=e.controls;ct.mode='look';ct.pos.set(-9,FF[2]+1.12,9.55);ct.yaw=Math.PI;ct.pitch=.1;ct.limit=[Math.PI-1.3,Math.PI+1.3,-.2,.6];const sc={scene:s,fov:62,hots:[],imagineAll:true,marks:B0.marks,post:{grain:.04,vig:.55,sat:.6,tint:[1,.98,.9],bloom:.3,exposure:.9},panel:[['라디에이터 옆, 침낭을 덮어놓은 탁자','¶73']],update(){B0.relight(e.camera.position)}};a.loop('hum',{type:'white',freq:120,q:12,filter:'bandpass',gain:.025});a.loop('murmur',{type:'brown',freq:500,gain:.04});await c.enter(sc,{fade:.9});c.hint('');const l=TABLE[n%TABLE.length];await c.say(l[0],{ref:l[1],quote:!l[1].includes('줄임')})}
// 뜨락 (부록 C 9번). 고요
async function stageGarden(c){const{e,a}=c;const s=new THREE.Scene();s.background=new THREE.Color(0x0c0e11);s.fog=new THREE.FogExp2(0x11141a,.09);s.add(new THREE.HemisphereLight(0x48505c,0x20201e,.7));
 const g=plane(60,60,std(0xffffff,{map:T.snow([10,10]),color:0x747a82}),0,0,0,0,-Math.PI/2);s.add(g);for(let i=0;i<14;i++){const t=new THREE.Mesh(new THREE.PlaneGeometry(6,10),new THREE.MeshBasicMaterial({map:T.tree(i+60),transparent:true,alphaTest:.4,side:THREE.DoubleSide}));t.position.set(-16+((i*7)%32),5,-16+((i*11)%22));s.add(t)}
 const pole=box(.08,3.6,.08,std(0x222),3,1.8,-5);const lamp=new THREE.PointLight(0xffd9a0,3,14,1.8);lamp.position.set(3,3.5,-5);const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:T.soft('#ffd9a0'),transparent:true,opacity:.6,depthWrite:false,blending:THREE.AdditiveBlending}));glow.scale.setScalar(1.8);glow.position.copy(lamp.position);s.add(pole,lamp,glow);for(let i=0;i<5;i++)s.add(box(.05,.5,.05,std(0x33332f),-4+i*.5,.3,-3));s.add(box(2.2,.04,.05,std(0x33332f),-3,.5,-3));
 const bw=box(30,14,1,std(0x25262a),0,7,8);s.add(bw);const un=[(await import('../core/kit.js')).dust(s,[-14,14,0,8,-14,6],300,0xffffff,.035,.7,.28)][0];let br=(await import('../core/kit.js')).breath(s,()=>e.camera.position.clone().add(e.camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(.5)).add(new THREE.Vector3(0,-.15,0)));
 const sc={scene:s,fov:60,post:{grain:.05,vig:.5,sat:.5,bloom:.5},imagineAll:true,marks:[D([3,3,-5],'뜨락의 모습은 상상. 고요는 ¶5',12)],panel:[['매섭게 얼어붙은 공기 속으로 나서는 순간, 불현듯 고요가 찾아왔다.','¶5']],update(dt){un(dt);br(dt)}};
 const ct=e.controls;ct.mode='look';ct.pos.set(0,1.62,4);ct.yaw=0;ct.pitch=.03;ct.limit=[-.9,.9,-.4,.4];a.loop('cold',{type:'brown',freq:180,gain:.035});c.sfx('고요. 눈 내리는 소리조차 없다',5);await c.enter(sc,{fade:1});await c.wait(2);await c.say('불현듯 고요가 찾아왔다.',{ref:'¶5',quote:true});await c.say('나의 환자들은 나의 구원자였다.',{ref:'¶7',quote:true});await c.wait(2);await c.leave(1.6)}
