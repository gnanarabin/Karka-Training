l=[1,0,0,0,3,9,13]
l2=0

while l2 in l:
    
    l.remove(l2)
    l.append(l2)
    print(1)

    
print(l)

"""for i in l:
    if i==0:
        l.remove(0)
        l.append(eval("0"))
print(l)"""