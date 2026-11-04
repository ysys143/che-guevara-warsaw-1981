import fs from 'fs';
const L=fs.readFileSync('../che_guevara.txt','utf8').split('\n');
const {PLACES,KINDS}=await import(process.cwd()+'/src/data/places.js');
const {NAMES}=await import(process.cwd()+'/src/data/names.js');
const city=JSON.parse(fs.readFileSync('public/data/city.json','utf8'));
let bad=0,n=0;const chk=(q,r,who)=>{n++;const k=+r.replace('¶','');if(!L[k-1]||!L[k-1].includes(q)){bad++;console.log('MISS',who,r,q.slice(0,40))}};
for(const P of PLACES){for(const[q,r]of P.q)chk(q,r,P.id);for(const s of P.street||[])if(!city.streets[s]?.length){bad++;console.log('NOSTREET',P.id,s)}if(typeof P.at==='string'&&!city.anchors[P.at]&&P.at!=='room'){bad++;console.log('NOANCHOR',P.id)}}
for(const N of NAMES)if(N.q)chk(N.q[0],N.q[1],N.n);
const c={};for(const P of PLACES)c[P.kind]=(c[P.kind]||0)+1;
console.log('quotes',n,'bad',bad,c,'names',NAMES.length, new Set(PLACES.map(p=>p.id)).size===PLACES.length?'ids unique':'DUP IDS');
