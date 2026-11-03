import * as THREE from 'three';
const h=(tag,id,parent)=>{const e=document.createElement(tag);if(id)e.id=id;parent.appendChild(e);return e};
export const IMAGINE_TEXT='이 부분은 자료가 부족해 상상으로 채웠습니다';
export class Hud{
 constructor(root){this.root=root;
  this.fadeEl=h('div','fade',root);this.dot=h('div','dot',root);this.finder=h('div','finder',root);
  this.finder.innerHTML=`<svg viewBox="0 0 1000 600" preserveAspectRatio="none"><g fill="none" stroke="#e9e4d6" stroke-width="1.3" opacity=".8"><path d="M60 110V60H150M850 60H940V110M940 490V540H850M150 540H60V490"/><path d="M500 262V238M500 362V338M462 300H438M562 300H538"/><circle cx="500" cy="300" r="4"/></g></svg><div class="read"></div>`;
  this.finderRead=this.finder.querySelector('.read');
  this.markLayer=h('div','marks',root);this.caption=h('div','caption',root);this.caption.setAttribute('aria-live','polite');this.sfxEl=h('div','sfx',root);this.hintEl=h('div','hint',root);
  this.hotEl=h('div','hot',root);this.imagineEl=h('div','imagine',root);this.imagineEl.textContent=IMAGINE_TEXT;this.statusEl=h('div','status',root);
  this.toolsEl=h('div','tools',root);this.panelEl=h('div','panel',root);this.chooserEl=h('div','chooser',root);this.titleEl=h('div','title',root);this.titleEl.style.display='none';this.roomEl=h('div','room',root);
  this.marks=[];this.gradesOn=false;this.gradesAllowed=true;this.mapHandler=null;
  this.btnGrades=this.tool('근거 표시','G',()=>this.toggleGrades());this.btnPanel=this.tool('원문','Q',()=>this.togglePanel());this.btnMap=this.tool('M의 창','M',()=>this.mapHandler&&this.mapHandler());this.btnSound=this.tool('소리','',()=>this.onSound&&this.onSound());
  this.btnMap.style.display='none';this.toolsEl.style.display='none';this.panelItems=[];
  this.panelEl.innerHTML='<button class="close">닫기</button><h3>이 장면의 원문 근거</h3><div class="body"></div><p style="font-size:12px;color:#a9a395;margin-top:2em">짧은 인용만 싣는다. 전문은 사용 권리를 확인하기 전까지 싣지 않는다.</p>';
  this.panelEl.querySelector('.close').onclick=e=>{this.togglePanel(false);e.currentTarget.blur()};
 }
 tool(text,key,fn){const b=h('button',null,this.toolsEl);b.textContent=key?`${text} ${key}`:text;b.onclick=e=>{e.stopPropagation();fn();b.blur()};return b}
 mapOn(fn){this.mapHandler=fn;this.btnMap.style.display='';this.btnMap.disabled=false}
 mapOff(){this.mapHandler=null;this.btnMap.disabled=true}
 showTools(v){this.toolsEl.style.display=v?'flex':'none'}
 fade(toBlack,sec=1.2){this.fadeEl.style.setProperty('--fade',sec+'s');this.fadeEl.style.opacity=toBlack?1:0;return new Promise(r=>setTimeout(r,sec*1000+30))}
 line(text,{ref='',quote=false}={}){const c=this.caption;c.classList.toggle('quote',!!quote);c.innerHTML='<span class="t"></span>'+(ref?`<span class="ref">${ref}</span>`:'');c.querySelector('.t').textContent=text;c.classList.add('show')}
 clearLine(){this.caption.classList.remove('show')}
 sfx(text,sec=3.5){this.sfxEl.textContent=`[${text}]`;this.sfxEl.classList.add('show');clearTimeout(this._sfx);this._sfx=setTimeout(()=>this.sfxEl.classList.remove('show'),sec*1000)}
 hint(t=''){this.hintEl.textContent=t}
 status(t=''){this.statusEl.textContent=t;this.statusEl.classList.toggle('show',!!t)}
 hot(t){this.hotEl.textContent=t||'';this.hotEl.classList.toggle('show',!!t)}
 imagine(on){this.imagineEl.classList.toggle('show',!!on)}
 viewfinder(on,read=''){this.finder.classList.toggle('show',!!on);this.finderRead.textContent=read}
 toggleGrades(v){if(!this.gradesAllowed)return;this.gradesOn=v??!this.gradesOn;this.btnGrades.setAttribute('aria-pressed',this.gradesOn);this.renderMarks()}
 allowGrades(v){if(this.forceGrades)return;this.gradesAllowed=v;this.btnGrades.disabled=!v;if(!v){this.gradesOn=false;this.btnGrades.setAttribute('aria-pressed',false)}this.renderMarks()}
 setMarks(list){this.marks=(list||[]).map(m=>({...m,pos:new THREE.Vector3(...m.pos)}));this.renderMarks()}
 renderMarks(){this.markLayer.innerHTML='';for(const m of this.marks){m.el=null}if(!this.gradesOn)return;for(const m of this.marks){const e=document.createElement('div');e.className='mark '+m.g;e.innerHTML=`<b>${m.g}</b><span></span>`;e.querySelector('span').textContent=m.t;this.markLayer.appendChild(e);m.el=e}}
 updateMarks(cam,w,h2){if(!this.gradesOn)return;const v=new THREE.Vector3();for(const m of this.marks){if(!m.el)continue;v.copy(m.pos).project(cam);const vis=v.z<1&&Math.abs(v.x)<1&&Math.abs(v.y)<1&&m.pos.distanceTo(cam.position)<(m.r||16);m.el.style.display=vis?'block':'none';if(vis){m.el.style.left=(v.x+1)/2*w+'px';m.el.style.top=(1-v.y)/2*h2+'px'}}}
 setPanel(items){this.panelItems=items||[];const b=this.panelEl.querySelector('.body');b.innerHTML='';for(const[q,ref]of this.panelItems){const d=document.createElement('div');d.className='q';d.innerHTML='<span></span><small></small>';d.firstChild.textContent=q;d.lastChild.textContent=ref;b.appendChild(d)}}
 togglePanel(v){if(this.noPanel)return;const on=v??!this.panelEl.classList.contains('show');this.panelEl.classList.toggle('show',on)}
 choose(title,sub,opts){return new Promise(res=>{const el=this.chooserEl;el.innerHTML=`<div class="paper"><h2></h2><p></p></div>`;el.querySelector('h2').textContent=title;el.querySelector('p').textContent=sub;const p=el.querySelector('.paper');for(const o of opts){const b=document.createElement('button');b.className='opt';b.innerHTML='<span></span><small></small>';b.firstChild.textContent=o.label;b.lastChild.textContent=o.sub||'';b.disabled=!!o.disabled;b.onclick=()=>{document.activeElement?.blur();el.classList.remove('show');res(o.id)};p.appendChild(b)}el.classList.add('show');setTimeout(()=>p.querySelector('button.opt:not([disabled])')?.focus(),50);this._auto=()=>{const o=opts.find(o=>!o.disabled);el.classList.remove('show');res(o.id)}})}
 ask(title,sub,placeholder){return new Promise(res=>{const el=this.chooserEl;el.innerHTML=`<div class="paper"><h2></h2><p></p><input><button class="opt">말한다</button></div>`;el.querySelector('h2').textContent=title;el.querySelector('p').textContent=sub;const i=el.querySelector('input');i.placeholder=placeholder||'';const done=()=>{el.classList.remove('show');res(i.value.trim())};el.querySelector('button').onclick=done;i.onkeydown=e=>{e.stopPropagation();if(e.key==='Enter')done()};el.classList.add('show');setTimeout(()=>i.focus(),50);this._auto=()=>{i.value='잎사귀';done()}})}
}
