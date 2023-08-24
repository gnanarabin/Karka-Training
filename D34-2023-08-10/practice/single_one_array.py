l=[2,2,1,5,4,5,4,9]
l2=[]

for i in l:
    count=0
    for k in range(len(l)):
        if i==l[k]:
            count=count+1
    if count==1:
        l2.append(i)
print(l2)
        




    

    



