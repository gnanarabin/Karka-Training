l=[2, 5, 8, 1, 9, 3, 7]
num=0
count=0
a,b=0,0

for i in range(len(l)):
    # for k in range (1,len(l)):
    for k in range (i+1,len(l)):
        add=l[i]-l[k]
        num=abs(add)
        
        # print(num)
        if num>count:
            count=num
            a,b=l[i],l[k]
print((count),(a,b))
        

