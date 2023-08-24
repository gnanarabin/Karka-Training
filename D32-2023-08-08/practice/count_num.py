num=[3,2,4,4,3,4,3,1,3,4,3]
length=0

for i in num:
    count=0

    for k in range(len(num)):
        if i==num[k]:
            count=count+1
            
            if count>length:
                length=count
                name=num[k]


# print(length,name)
print(f"{name} is majority of the list")




            
