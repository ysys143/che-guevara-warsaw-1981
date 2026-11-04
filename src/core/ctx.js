import * as THREE from 'three';
export const sleep=s=>new Promise(r=>setTimeout(r,s*1000));
export class Ctx{
 constructor(engine,hud,audio,params){this.e=engine;this.hud=hud;this.a=audio;this.auto=params.has('auto');this.speed=this.auto?.04:1;this.state=this.load();this.stageId='';this.city=null;this.params=params;this.hist=[];this.review=null;this.saying=0;this.waits=new Set();this.advs=[]}
 load(){try{return JSON.parse(localStorage.getItem('che-state')||'{}')}catch{return{}}}
 save(){try{localStorage.setItem('che-state',JSON.stringify(this.state))}catch{}}
 // 연출 대기. 자막이 없을 때 다음 대사 키를 누르면 바로 끝난다
 wait(s){return new Promise(r=>{const done=()=>{clearTimeout(t);this.waits.delete(done);r()};const t=setTimeout(done,s*this.speed*1000);this.waits.add(done)})}
 // 한 문장 자막. 읽을 시간을 글자 수로 준다
 async say(text,o={}){while(this.review!=null)await sleep(.1);const id=this._sayId=(this._sayId||0)+1;this.hist.push({text,o});this.saying=id;this.hud.line(text,o);const t=o.dur??Math.max(2.6,text.length*.095+1.2);await this.hold(t*this.speed);if(id===this._sayId){this.saying=0;if(this.review==null)this.hud.clearLine()}await this.wait(.5)}
 // 자막 시간. 이전 대사를 보는 동안은 멈추고, 다음 대사 키로 건너뛴다
 hold(sec){this._skip=false;let left=sec*1000;return new Promise(r=>{const i=setInterval(()=>{if(this.review==null)left-=50;if(this._skip||left<=0){clearInterval(i);this._skip=false;r()}},50)})}
 line(d){const h=this.hist,live=!!this.saying;const show=()=>{const q=h[this.review];this.hud.line(q.text,{...q.o,ref:(q.o.ref?q.o.ref+' · ':'')+'이전 대사'});clearTimeout(this._rv);this._rv=setTimeout(()=>this.endReview(),12000)};if(d>0){if(this.review==null){if(live)this._skip=true;else{[...this.waits].forEach(f=>f());if(this.advs.length)this.advs.at(-1)();else this.e.current?.onNext?.()}return}this.review++;if(this.review>=(live?h.length-1:h.length)){this.endReview();return}show();return}const start=h.length-(live?2:1);if(this.review==null){if(start<0)return;this.review=start}else this.review=Math.max(0,this.review-1);show()}
 endReview(){clearTimeout(this._rv);this.review=null;const h=this.hist;if(this.saying&&h.length){const q=h[h.length-1];this.hud.line(q.text,q.o)}else this.hud.clearLine()}
 async seq(lines){for(const l of lines){if(typeof l==='string')await this.say(l);else await this.say(l[0],l[1])}}
 sfx(t,s){this.hud.sfx(t,s)}
 hint(t){this.hud.hint(t)}
 // 조작을 기다리는 약속을 감싼다. advance는 그 조작을 대신 해 주는 함수다.
 // 오른쪽 화살표(대사가 없을 때)와 자동 플레이가 같은 advance를 부른다. 그래서 모든 장면을 → 키만으로 끝낼 수 있다
 gate(p,advance){let done=false;const f=()=>{if(!done)advance()};this.advs.push(f);if(this.auto)setTimeout(f,60);const end=()=>{done=true;const i=this.advs.indexOf(f);if(i>=0)this.advs.splice(i,1)};p.then(end,end);return p}
 // 사용자가 hot을 쓰면 끝나는 약속
 until(obj,{timeout=0}={}){const f=obj.userData.hot;const p=new Promise(res=>{const u=f.use;f.on=true;f.use=h=>{u?.(h);res(h)};if(timeout&&!this.auto)setTimeout(()=>{if(f.on!==false)this.e.useHot(obj)},timeout*1000)});return this.gate(p,()=>{if(f.on!==false)this.e.useHot(obj)})}
 // 카메라를 한 점으로 부드럽게 돌린다 (look, walk 공용)
 face(x,y,z,sec=.9){const c=this.e.controls,cam=this.e.camera,p=new THREE.Vector3(x,y,z);if(c.parent)c.parent.worldToLocal(p);const b=c.parent?c.pos:cam.position;const yaw=Math.atan2(-(p.x-b.x),-(p.z-b.z)),pitch=Math.atan2(p.y-b.y,Math.hypot(p.x-b.x,p.z-b.z));const y0=c.yaw,p0=c.pitch;let dy=yaw-y0;dy=Math.atan2(Math.sin(dy),Math.cos(dy));const st=performance.now(),d=Math.max(.01,sec*this.speed)*1000;return new Promise(r=>{const i=setInterval(()=>{const k=Math.min(1,(performance.now()-st)/d),s=k*k*(3-2*k);c.yaw=y0+dy*s;c.pitch=p0+(pitch-p0)*s;if(k>=1){clearInterval(i);r()}},16)})}
 any(objs){let done=false;const p=new Promise(res=>{for(const o of objs){const f=o.userData.hot,u=f.use;f.on=true;f.use=h=>{u?.(h);if(!done){done=true;res(o)}}}});return this.gate(p,()=>{if(!done)this.e.useHot(objs[0])})}
 // after초가 지나도 걷지 않으면 fn을 3초마다 불러 스스로 걷게 한다. 마우스만 쓰는 사용자도 멈추지 않는다
 // → 키를 누르면 to(걷는 목표 [x,z])로 1.2초 동안 미끄러지듯 옮긴 뒤 끝낸다. to가 없으면 바로 끝낸다
 walkUntil(cond,{after=0,fn=null,to=null,adv=null}={}){let skip=false,glide=null;const p=new Promise(res=>{const t0=performance.now();let last=0;const i=setInterval(()=>{const n=performance.now();if(cond()||skip){clearInterval(i);res();return}if(fn&&after&&(n-t0)/1000>after&&n-last>3000){last=n;fn()}},100)});
  p.then(()=>{if(glide){clearInterval(glide);glide=null;this.e.controls.lockMove=false}});
  return this.gate(p,()=>{if(this.auto){skip=true;return}if(glide)return;if(adv){adv();return}const T=typeof to==='function'?to():to,ct=this.e.controls;if(!T){skip=true;return}const a=ct.pos.clone(),st=performance.now(),D=1200;ct.lockMove=true;glide=setInterval(()=>{const k=Math.min(1,(performance.now()-st)/D),s=k*k*(3-2*k);ct.pos.x=a.x+(T[0]-a.x)*s;ct.pos.z=a.z+(T[1]-a.z)*s;if(k>=1){clearInterval(glide);glide=null;ct.lockMove=false;skip=true}},16)})}
 pick(){const m=new THREE.Mesh(new THREE.PlaneGeometry(9000,9000),new THREE.MeshBasicMaterial({visible:false,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;return m}
 choose(t,s,o){return this.gate(this.hud.choose(t,s,o),()=>this.hud._auto())}
 ask(t,s,ph){return this.gate(this.hud.ask(t,s,ph),()=>this.hud._auto())}
 async enter(scene,{fade=1.4}={}){this.e.show(scene);await this.wait(.05);await this.hud.fade(false,this.auto?.05:fade)}
 async leave(sec=1.2){await this.hud.fade(true,this.auto?.05:sec);this.hud.clearLine();this.hud.hint('');this.a.stopAll(.6);this.dispose()}
 dispose(){this.advs.length=0;const c=this.e.current;this.e.current=null;this.e.hots=[];this.e.floorPick=null;this.e.controls.mode='none';this.e.controls.lockMove=false;this.e.controls.nav=null;this.e.controls.blocks=null;this.e.controls.limit=null;this.e.controls.parent=null;this.hud.viewfinder(false);this.hud.imagine(false);if(c&&c.scene&&!c.keep){c.scene.traverse(o=>{if(o.geometry&&!o.geometry.userData?.shared&&o!==this.city?.bld)o.isMesh&&o.parent!==this.city?.g&&o.geometry.dispose?.()})}}
}
