#!/usr/bin/env python3
"""원문에 나오지만 city.json에 없던 거리와 지점을 OSM에서 받아 합친다. 건물은 건드리지 않는다.
사용: add_names.py public/data/city.json
옛 이름(원문) → 오늘의 OSM 이름: 노보트키 → Andersa, 마르흘레프스키 → Jana Pawła II, 루트코프스키 → Chmielna."""
import json,sys,math,urllib.request,urllib.parse
LAT0,LON0=52.2355,21.03
K=math.cos(math.radians(LAT0))*111320
def xy(lon,lat): return ((lon-LON0)*K, -(lat-LAT0)*110574)
BB='52.18,20.94,52.29,21.12'
STREETS={'Generała Władysława Andersa':'Andersa','Aleja Jana Pawła II':'Jana Pawła II','Chmielna':'Chmielna'}
q='[out:json][timeout:60];('+''.join(f'way["highway"]["name"="{n}"]({BB});' for n in STREETS)+f'node["name"="Plac Teatralny"]({BB});way["name"="Plac Teatralny"]({BB});node["name"~"Blikle"]({BB}););out geom;'
req=urllib.request.Request('https://overpass-api.de/api/interpreter',data=urllib.parse.urlencode({'data':q}).encode(),headers={'User-Agent':'che-guevara-warsaw-1981 build script'})
els=json.load(urllib.request.urlopen(req,timeout=90))['elements']
city=json.load(open(sys.argv[1]))
def simp(p,eps=1):
    if len(p)<3: return p
    a,b=p[0],p[-1];dx,dy=b[0]-a[0],b[1]-a[1];L=math.hypot(dx,dy) or 1
    i,dm=0,0
    for k in range(1,len(p)-1):
        d=abs(dy*(p[k][0]-a[0])-dx*(p[k][1]-a[1]))/L
        if d>dm: i,dm=k,d
    if dm<eps: return [a,b]
    return simp(p[:i+1],eps)[:-1]+simp(p[i:],eps)
for n in STREETS.values(): city['streets'][n]=[]
for e in els:
    t=e.get('tags',{});nm=t.get('name','')
    if e['type']=='way' and nm in STREETS and 'geometry' in e:
        pts=simp([xy(p['lon'],p['lat']) for p in e['geometry']])
        city['streets'][STREETS[nm]].append([round(v) for pt in pts for v in pt])
    elif nm=='Plac Teatralny':
        if e['type']=='node': city['anchors']['teatr']=[round(v) for v in xy(e['lon'],e['lat'])]
        elif 'teatr' not in city['anchors'] and 'geometry' in e:
            g=e['geometry'];city['anchors']['teatr']=[round(v) for v in xy(sum(p['lon'] for p in g)/len(g),sum(p['lat'] for p in g)/len(g))]
    elif 'Blikle' in nm and e['type']=='node' and 'Nowy' in t.get('addr:street',''):
        city['anchors']['blikle']=[round(v) for v in xy(e['lon'],e['lat'])]
# 1981년 구간만 남긴다 [pl.wikipedia]. 루트코프스키는 Chmielna의 노비시비아트–마르샤우코프스카 구간(1950–1990),
# 마르흘레프스키는 예로졸림스키에 대로 북쪽, 옛 부치카(오늘의 스타프키 부근)까지의 Jana Pawła II 구간이다.
city['streets']['Chmielna']=[s for s in city['streets']['Chmielna'] if min(s[0::2])>-1300]
city['streets']['Jana Pawła II']=[s for s in city['streets']['Jana Pawła II'] if max(s[1::2])<900 and min(s[1::2])>-2150]
for n in STREETS.values(): print(n,len(city['streets'][n]),'segments')
print('teatr',city['anchors'].get('teatr'),'blikle',city['anchors'].get('blikle'))
json.dump(city,open(sys.argv[1],'w'),ensure_ascii=False,separators=(',',':'))
