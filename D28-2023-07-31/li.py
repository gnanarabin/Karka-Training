l=[3,2,1,1,1,1,2,3]
l2=1

"""for i in l:
    if i==1:
        l.remove(l2)
        l.append(0)
print(l)"""      # Error 

while l2 in l:
    l.remove(l2)
    l.append('*')

print(l)



