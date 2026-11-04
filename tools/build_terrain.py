#!/usr/bin/env python3
"""AWS Terrarium 고도 타일을 받아 시작 지도용 높이 격자(public/data/terrain.json)를 굽는다.
고도 타일은 브라우저에서 CORS로 읽을 수 없어 빌드 때 미리 만든다.
사용: uv run --with pillow python tools/build_terrain.py public/data/terrain.json
격자: 도심 원점(build_city.py와 같은 투영) 기준 ±R m, N×N. 값은 비스와강 수면(BASE m)을 0으로 한 높이(m), 0.1 m 단위 uint16, base64."""
import sys,math,io,json,base64,struct,urllib.request
from PIL import Image
LAT0,LON0=52.2355,21.03
KX=math.cos(math.radians(LAT0))*111320;KZ=110574
R=26000;N=384;Z=12;BASE=77.0
def ll(x,z): return LAT0-z/KZ, LON0+x/KX
def tile_xy(lat,lon,z):
    n=2**z;r=math.radians(lat)
    return (lon+180)/360*n,(1-math.log(math.tan(r)+1/math.cos(r))/math.pi)/2*n
la0,lo0=ll(-R,R);la1,lo1=ll(R,-R)
fx0,fy1=tile_xy(la0,lo0,Z);fx1,fy0=tile_xy(la1,lo1,Z)
tx0,tx1,ty0,ty1=int(fx0),int(fx1),int(fy0),int(fy1)
cache={}
def tile(x,y):
    k=(x,y)
    if k not in cache:
        u=f'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{Z}/{x}/{y}.png'
        req=urllib.request.Request(u,headers={'User-Agent':'che-guevara-warsaw-1981 build script'})
        cache[k]=Image.open(io.BytesIO(urllib.request.urlopen(req,timeout=60).read())).convert('RGB').load()
    return cache[k]
def elev_px(px,py):
    x,y=int(px//256),int(py//256);p=tile(x,y)[int(px%256),int(py%256)]
    return p[0]*256+p[1]+p[2]/256-32768
def elev(fx,fy):
    px,py=fx*256-.5,fy*256-.5;x0,y0=math.floor(px),math.floor(py);ax,ay=px-x0,py-y0
    e=lambda a,b:elev_px(a,b)
    return (e(x0,y0)*(1-ax)+e(x0+1,y0)*ax)*(1-ay)+(e(x0,y0+1)*(1-ax)+e(x0+1,y0+1)*ax)*ay
out=bytearray();mn,mx=1e9,-1e9
for j in range(N):
    z=-R+2*R*j/(N-1)
    for i in range(N):
        x=-R+2*R*i/(N-1);lat,lon=ll(x,z);fx,fy=tile_xy(lat,lon,Z)
        h=max(0.,elev(fx,fy)-BASE);mn=min(mn,h);mx=max(mx,h)
        out+=struct.pack('<H',min(65535,int(round(h*10))))
json.dump({'R':R,'N':N,'base':BASE,'src':'AWS Terrain Tiles (Terrarium), Mapzen/Linux Foundation; SRTM 등','h':base64.b64encode(bytes(out)).decode()},open(sys.argv[1],'w'))
print('tiles',len(cache),'min',round(mn,1),'max',round(mx,1),'bytes',len(out))
