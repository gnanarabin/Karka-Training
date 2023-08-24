
l=[100,180,260,310,40,535,695]
prof=0

for i in range(len(l)):
    for k in range(i,len(l)):
        a=l[k]-l[i]
        
        if a>prof:
            prof=a
            q1=i
            q2=k
print(prof,(q1,q2))


        # using while loop

# n=int(input("num :"))
# list=[]
# i=0
# prof=0
# while i<n:
#     l=int(input("Enter num :"))

#     i=i+1
    
#     list=list+[l]
# print(list)

# for i in range(len(list)):
#     for k in range(i,len(list)):
#         a=list[k]-list[i]
        
#         if a>prof:
#             prof=a
#             q1=i
#             q2=k
# print(prof,(q1,q2))






    
    


