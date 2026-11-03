import {loadCity,City} from '../core/city.js';
export async function getCity(c){if(c.city)return c.city;c.hud.status('도시를 세우는 중');const d=await loadCity();await new Promise(r=>setTimeout(r,30));c.city=new City(d);c.hud.status('');return c.city}
export const A=(pos,t,r)=>({g:'A',pos,t,r});export const B=(pos,t,r)=>({g:'B',pos,t,r});export const C=(pos,t,r)=>({g:'C',pos,t,r});export const D=(pos,t,r)=>({g:'D',pos,t,r});
