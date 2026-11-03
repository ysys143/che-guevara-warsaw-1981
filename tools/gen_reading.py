#!/usr/bin/env python3
"""기획안에서 열람실 자료를 뽑는다. 상상 목록과 출처의 정본은 기획안이다."""
import json,re,sys
t=open(sys.argv[1],encoding='utf-8').read()
c=t[t.index('### 채운 내용'):]
items=[]
for l in c.split('\n'):
    m=re.match(r'\| (\d+) \| (.*?) \| (.*) \| (장면|구역|내부) \| (.*?) \|$',l)
    if m: items.append({'n':int(m[1]),'gap':m[2],'fill':m[3],'show':m[4],'until':m[5]})
b=t[t.index('## 부록 B. 외부 출처'):t.index('## 부록 C.')]
src=[{'id':m[1],'name':m[2].strip(),'urls':re.findall(r'https?://\S+',m[3])} for m in re.finditer(r'^- \[(S\d+)\] (.*?): (https?://.*)$',b,re.M)]
d=t[t.index('### 러시아어판과의 대조'):t.index('### 작품이 말하지 않는 것')]
compare=[[x.strip().replace('**','') for x in l.strip('|').split('|')] for l in d.split('\n') if l.startswith('| ') and not l.startswith('| 항목')]
json.dump({'imagined':items,'sources':src,'compare':compare},open(sys.argv[2],'w',encoding='utf-8'),ensure_ascii=False,indent=0)
print(len(items),len(src))
