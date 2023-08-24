l=[1,5,3,7,9,13]
list=[]
for i in range(len(l)):
    for k in range(len(l)):
        if l[i]+l[k]==10:
            list.append(i)
            list.append(k)
            break
    break
print(list)

