l1=[4,8,12,22,9,4,3]
l2=[3,9,16,24,7]

l=[]

for i in range(len(l2)):
    num1=l1[i]
    num2=l2[i]

    if num1>num2:
        l=l+[num1]
        
    elif num1<num2:
        l=l+[num2]
    
    #a=len(l1[i]-l2[i])
    c=l1[len(l2):]
    #print(c)

l=l+c
    
    
print(l)


    

    
    
    
      
