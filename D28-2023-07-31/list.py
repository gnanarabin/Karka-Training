l=[3,3,2,2]
num=3

for i in l:
  if i==num:
    l.remove(num)
    l.append("*")
    for k in l:
      if k==num:
        l.remove(num)
        l.append("*")
    
print(l)