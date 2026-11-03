import * as THREE from 'three';
import {City,Crowd} from '../core/city.js';
import {getCity} from './shared.js';
// 0단계. 낮이 잠깐 지나간다. 카메라 조작 없음
export async function stageDark(c){const{e,a}=c,city=await getCity(c);const s=new THREE.Scene();s.background=new THREE.Color(0x030304);s.add(city.g);s.fog=city.fogObj;const hemi=new THREE.HemisphereLight(0x8a8f96,0x10100f,.05);s.add(hemi);
 city.style({fog:0x050506,fogD:.006,sky:[.012,.013,.015],sun:[0,0,0],lit:.05,snow:0,road:0x1c1c1e,walk:0x262624,ground:0x0d0d0d,park:0x0a0b09,bank:0x151514,win:1});
 const r=city.data.route,cam=new THREE.Vector3(r[2]+3,1.7,r[3]+42),look=new THREE.Vector3(r[4]-12,6,r[5]-160);
 const Tx=await import('../core/tex.js');const stains=new THREE.Group();for(let i=0;i<16;i++){const m=new THREE.Mesh(new THREE.PlaneGeometry(9+i%3*4,3+i%2*2),new THREE.MeshBasicMaterial({map:Tx.soft('#e8b25a'),transparent:true,opacity:.34,depthWrite:false,blending:THREE.AdditiveBlending}));m.rotation.x=-Math.PI/2;m.position.set(cam.x+(i%2?9:-9)+(i%3),.2,cam.z-16-i*22);stains.add(m)}s.add(stains);
 const sun=new THREE.Sprite(new THREE.SpriteMaterial({map:(await import('../core/tex.js')).soft('#fff2c8'),transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending}));sun.scale.setScalar(52);sun.position.copy(look).add(new THREE.Vector3(30,120,-260));s.add(sun);
 let T=0,sc={scene:s,fov:50,imagineAll:true,post:{grain:.08,vig:.7,sat:.5,bloom:.5},panel:[['그 시절에는 모든 일이 어둠 속에서 벌어졌다.','¶1'],['태양은 고작 60와트 전구 하나를 켜놓은 정도의 밝기였다.','¶1']],marks:[],update(dt){T+=dt;const k=Math.max(0,Math.sin(Math.min(T/24,1)*Math.PI));e.camera.position.copy(cam);e.camera.lookAt(look);hemi.intensity=.05+k*.7;sun.material.opacity=k*.55;city.style({sky:[.012+k*.05,.013+k*.05,.015+k*.05],lit:.05+(1-k)*.14,fog:new THREE.Color(.018+k*.09,.02+k*.09,.022+k*.09)})}};
 a.loop('wind',{type:'brown',freq:280,gain:.1});c.sfx('먼 바람과 전차 선로의 낮은 울림',5);await c.enter(sc,{fade:3});await c.wait(2.5);await c.say('그 시절에는 모든 일이 어둠 속에서 벌어졌다.',{ref:'¶1',quote:true});await c.wait(5);await c.say('태양은 고작 60와트 전구 하나를 켜놓은 정도의 밝기였다.',{ref:'¶1',quote:true});await c.wait(9);await c.say('1981년 12월, 바르샤바.',{ref:'¶1, 각주 1'});await c.leave(2);s.remove(city.g)}
