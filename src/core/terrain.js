// 시작 지도의 지형. tools/build_terrain.py가 구운 높이 격자(비스와강 수면 = 0 m)를 읽는다.
// GPU: 재질의 정점 셰이더에서 월드 xz로 높이 텍스처를 읽어 y를 올린다(uTerr가 0이면 평평). CPU: h(x,z)로 핀·이름표·사람 높이를 맞춘다.
import * as THREE from 'three';
export const EX=1.6; // 높이 과장 배율. 지도 거리에서 강변 언덕이 보이도록
export const TERR={uHM:{value:null},uHR:{value:26000},uTerr:{value:0}};
let grid=null;
export async function loadTerrain(){if(grid)return grid;try{const d=await (await fetch('./data/terrain.json')).json();const b=Uint8Array.from(atob(d.h),c=>c.charCodeAt(0));const u=new Uint16Array(b.buffer);const N=d.N,f=new Float32Array(N*N);for(let i=0;i<N*N;i++)f[i]=u[i]/10*EX;
  const tex=new THREE.DataTexture(f,N,N,THREE.RedFormat,THREE.FloatType);tex.minFilter=tex.magFilter=THREE.LinearFilter;tex.needsUpdate=true;TERR.uHM.value=tex;TERR.uHR.value=d.R;grid={N,R:d.R,f}}catch(e){console.warn('terrain',e);grid={N:2,R:26000,f:new Float32Array(4)};const t=new THREE.DataTexture(new Float32Array(4),2,2,THREE.RedFormat,THREE.FloatType);t.needsUpdate=true;TERR.uHM.value=t}return grid}
// 격자 이중선형 보간. 격자 밖은 가장자리 값
export function h(x,z){if(!grid||!TERR.uTerr.value)return 0;const{N,R,f}=grid;const gx=Math.min(N-1.001,Math.max(0,(x+R)/(2*R)*(N-1))),gz=Math.min(N-1.001,Math.max(0,(z+R)/(2*R)*(N-1)));const i=gx|0,j=gz|0,a=gx-i,b=gz-j;return (f[j*N+i]*(1-a)+f[j*N+i+1]*a)*(1-b)+(f[(j+1)*N+i]*(1-a)+f[(j+1)*N+i+1]*a)*b}
// 텍셀 중심 보정: 격자 점 i가 텍스처 좌표 (i+.5)/N에 오도록
const GLSL='uniform sampler2D uHM;uniform float uHR,uTerr;\nfloat terrH(vec2 p){float N=float(textureSize(uHM,0).x);vec2 g=(p+uHR)/(2.*uHR)*(N-1.);return uTerr*texture(uHM,(g+.5)/N).r;}\n';
// 내장 재질(Standard·Basic 등)에 지형을 넣는다. project_vertex를 월드 좌표에서 y를 올리는 식으로 바꾼다
export function terrainize(m,lift=0){if(m.userData.terr)return m;m.userData.terr=true;const prev=m.onBeforeCompile;m.onBeforeCompile=(s,r)=>{prev?.(s,r);Object.assign(s.uniforms,TERR);s.vertexShader=GLSL+s.vertexShader.replace('#include <project_vertex>',`vec4 wp=vec4(transformed,1.);
#ifdef USE_BATCHING
wp=batchingMatrix*wp;
#endif
#ifdef USE_INSTANCING
wp=instanceMatrix*wp;
#endif
wp=modelMatrix*wp;wp.y+=terrH(wp.xz)+${lift.toFixed(2)}*uTerr;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;`)};m.customProgramCacheKey=()=>'terr'+lift+(prev?'p':'');m.needsUpdate=true;return m}
// 건물 ShaderMaterial(city.js bldMaterial)용
export function terrainizeBld(m){if(m.userData.terr)return m;m.userData.terr=true;Object.assign(m.uniforms,TERR);m.vertexShader=GLSL+m.vertexShader.replace('vec4 w=modelMatrix*vec4(position,1.);','vec4 w=modelMatrix*vec4(position,1.);w.y+=terrH(w.xz);');m.needsUpdate=true;return m}
