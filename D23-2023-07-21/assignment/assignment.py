import json
a=[1,2,3,2,5,1,5]

'''b=set(a)
c=list(b)'''

"""b=[]
for i in a:
    if i not in b:
        b.append(i)
    
print(b)"""
b=json.dumps(a)
print(type(b))
c=json.loads(b)
print(type(c))



