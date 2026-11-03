#!/usr/bin/env python3
"""OSM 추출물을 앱용 city.json으로 줄인다. 현재 지도이므로 1981년 이후 건물을 할 수 있는 만큼 거른다.
사용: build_city.py roads.json buildings.geojson out.json"""
import json,sys,math,heapq,re,os
from collections import defaultdict
LAT0,LON0=52.2355,21.03
K=math.cos(math.radians(LAT0))*111320
def xy(lon,lat): return ((lon-LON0)*K, -(lat-LAT0)*110574)
roads=json.load(open(sys.argv[1]))['elements']
R=[];rail=[];tram=[];parks=[];river=[]
graph=defaultdict(dict);byname=defaultdict(list);nodes={}
CL={'motorway':0,'trunk':0,'primary':0,'secondary':0,'tertiary':1,'unclassified':2,'residential':2,'living_street':2,'pedestrian':3}
for e in roads:
    t=e.get('tags',{})
    if e['type']!='way' or 'geometry' not in e: continue
    pts=[xy(p['lon'],p['lat']) for p in e['geometry']]
    if 'highway' in t:
        if t.get('tunnel') in('yes','building_passage') : continue
        c=CL[t['highway']];R.append((c,pts,t.get('name',''),t.get('bridge')=='yes'))
        for a,b in zip(pts,pts[1:]):
            ka=(round(a[0],1),round(a[1],1));kb=(round(b[0],1),round(b[1],1));d=math.dist(a,b)
            graph[ka][kb]=d;graph[kb][ka]=d
        if t.get('name'): byname[t['name']].append(pts)
    elif t.get('railway')=='rail' and t.get('tunnel')!='yes': rail.append(pts)
    elif t.get('railway')=='tram' and t.get('tunnel')!='yes': tram.append(pts)
    elif t.get('leisure')=='park' and len(pts)>3: parks.append(pts)
    elif t.get('waterway')=='river': river.append(pts)
def snap(name,lat,lon):
    x,z=xy(lon,lat);best=None
    for w in byname[name]:
        for p in w:
            d=math.hypot(p[0]-x,p[1]-z)
            if best is None or d<best[0]: best=(d,p)
    return (round(best[1][0],1),round(best[1][1],1))
def path(a,b):
    q=[(0,a)];D={a:0};P={}
    while q:
        d,u=heapq.heappop(q)
        if u==b: break
        if d>D[u]: continue
        for v,w in graph[u].items():
            nd=d+w
            if nd<D.get(v,1e18): D[v]=nd;P[v]=u;heapq.heappush(q,(nd,v))
    o=[b]
    while o[-1]!=a:o.append(P[o[-1]])
    return o[::-1]
WP=[('Ludwika Zamenhofa',52.2497,20.9935),('Mordechaja Anielewicza',52.2497,20.9950),('Generała Władysława Andersa',52.2480,20.9978),('Generała Władysława Andersa',52.2450,20.9990),('Plac Bankowy',52.2432,21.0003),('Senatorska',52.2428,21.0060),('Senatorska',52.2425,21.0100),('Wierzbowa',52.2418,21.0110),('Plac marszałka Józefa Piłsudskiego',52.2405,21.0118),('Królewska',52.2395,21.0130),('Krakowskie Przedmieście',52.2393,21.0160),('Krakowskie Przedmieście',52.2375,21.0172),('Nowy Świat',52.2345,21.0183),('Nowy Świat',52.2325,21.0200),('Aleje Jerozolimskie',52.2312,21.0235),('Aleje Jerozolimskie',52.2320,21.0345),('Most Księcia Józefa Poniatowskiego',52.2332,21.0420),('Most Księcia Józefa Poniatowskiego',52.2345,21.0465),('Aleja Księcia Józefa Poniatowskiego',52.2350,21.0505),('Francuska',52.2355,21.0525),('Francuska',52.2320,21.0535),('Saska',52.2300,21.0545),('Egipska',52.2275,21.0580),('Afrykańska',52.2262,21.0605)]
sn=[snap(*w) for w in WP];route=[sn[0]]
for a,b in zip(sn,sn[1:]):
    if a==b: continue
    route+=path(a,b)[1:]
def simp(p,eps=2.5):
    if len(p)<3: return p
    a,b=p[0],p[-1];dm=0;im=0;L=math.dist(a,b) or 1
    for i in range(1,len(p)-1):
        d=abs((b[0]-a[0])*(a[1]-p[i][1])-(a[0]-p[i][0])*(b[1]-a[1]))/L
        if d>dm:dm=d;im=i
    if dm>eps:return simp(p[:im+1],eps)[:-1]+simp(p[im:],eps)
    return [a,b]
def q(p,e=1.5): return [round(v) for pt in simp(p,e) for v in pt]
OUT={'origin':[LAT0,LON0],'route':q(route,2)}
OUT['roads']=[[c,1 if b else 0]+q(p) for c,p,n,b in R]
OUT['rail']=[q(p) for p in rail];OUT['tram']=[q(p) for p in tram];OUT['parks']=[q(p[:len(p)//2+1],4)[:-2]+q(p[len(p)//2:],4)[:-2] for p in parks if len(p)>4]
OUT['river']=q(max(river,key=len)+[],4) if river else []
river_all=sorted(river,key=lambda p:p[0][1]);OUT['river']=[q(p,4) for p in river]
KEY=['Nowy Świat','Foksal','Mikołaja Kopernika','Świętokrzyska','Aleje Jerozolimskie','Most Księcia Józefa Poniatowskiego','Aleja Księcia Józefa Poniatowskiego','Aleja Jerzego Waszyngtona','Saska','Francuska','Tamka','Stawki','Krakowskie Przedmieście','Ludwika Zamenhofa','Obrońców','Walecznych','Ateńska','Szaserów']
OUT['streets']={n:[q(p,1) for p in byname[n]] for n in KEY}
bld=[]
if len(sys.argv)>3 and os.path.exists(sys.argv[2]):
    gj=json.load(open(sys.argv[2]));drop=0
    for f in gj['features']:
        g=f['geometry'];p=f.get('properties') or {}
        if not g:continue
        ring=g['coordinates'][0] if g['type']=='Polygon' else (g['coordinates'][0][0] if g['type']=='MultiPolygon' else None)
        if not ring or len(ring)<4:continue
        tags=p.get('other_tags') or '';name=p.get('name') or ''
        def tag(k):
            m=re.search(r'"%s"=>"([^"]*)"'%re.escape(k),tags);return m.group(1) if m else None
        pts=[xy(*c[:2]) for c in ring][:-1]
        a=abs(sum(pts[i][0]*pts[(i+1)%len(pts)][1]-pts[(i+1)%len(pts)][0]*pts[i][1] for i in range(len(pts))))/2
        if a<70: continue
        cx=sum(c[0] for c in pts)/len(pts);cz=sum(c[1] for c in pts)/len(pts)
        lv=tag('building:levels');hg=tag('height');sd=tag('start_date') or tag('construction_date') or ''
        h=None
        try:
            if hg:h=float(re.sub(r'[^0-9.]','',hg))
            elif lv:h=float(lv.split(';')[0].split('-')[0])*3.2+1.5
        except: h=None
        keep_tall='Pałac Kultury' in name or 'Novotel' in name or 'Forum' in name
        m=re.match(r'(\d{4})',sd)
        if m and int(m.group(1))>=1982: drop+=1;continue
        if h and h>62 and not keep_tall: drop+=1;continue
        if (tag('building') or p.get('building'))in('stadium','grandstand'):drop+=1;continue
        if h is None:
            h=(a>900 and 22) or (a>250 and 16) or 11
            if cx>2300: h=min(h,11)
        hm=len(pts)//2
        pts=simp(pts[:hm+1],1.1)[:-1]+simp(pts[hm:]+[pts[0]],1.1)[:-1]
        if len(pts)<3:continue
        bld.append([round(h)]+[round(v,0) for pt in pts for v in pt])
    print('kept',len(bld),'dropped',drop)
OUT['bld']=[[int(v) for v in b] for b in bld]
OUT['anchors']={'cafe':[round(v) for v in snap('Nowy Świat',52.2315,21.0208)],'bridgeW':[round(v) for v in snap('Most Księcia Józefa Poniatowskiego',52.2332,21.0420)],'bridgeE':[round(v) for v in snap('Most Księcia Józefa Poniatowskiego',52.2345,21.0465)],'stawki':[round(v) for v in snap('Stawki',52.2525,20.9935)],'tamka':[round(v) for v in snap('Tamka',52.2375,21.0235)],'saska':[round(v) for v in snap('Saska',52.2300,21.0545)],'zamenhofa':list(map(round,sn[0])),'station':list(map(round,xy(21.0030,52.2288))),'univ':[round(v) for v in snap('Krakowskie Przedmieście',52.2393,21.0160)]}
json.dump(OUT,open(sys.argv[-1],'w'),separators=(',',':'))
L=sum(math.dist(a,b) for a,b in zip(route,route[1:]))
print('route m',round(L),'roads',len(OUT['roads']),'bytes',os.path.getsize(sys.argv[-1]))
