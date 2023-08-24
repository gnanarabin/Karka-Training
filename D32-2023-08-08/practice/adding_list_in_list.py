



num=[[1,2],[2,3],[6,7]]
operator=input("enter :")
add=0
l=[]
for i in num:
    for k in range(len(i)):
        if operator=="add":
            add=i[k]+add
        elif operator=="string":
            l.append(i[k])


if operator=="add":
    print(add)
else:
    print(type(str(l)))


# num=[[1,2],[2,3],[6,7]]
# operator=input("enter :")


# def add(num,operator):
#     add=0
#     for i in num:
#         for k in range(len(i)):
#             if operator=="add":
#                 add=i[k]+add
            
            
                
#     return add
    
# a1=add(num,operator)

# def str (num,operator):
#     l=[]
#     for i in num:
#         for k in range(len(i)):
#             if operator=="string":
#                 l.append(i[k])

#     return l
# a2=str(num,operator)

# if operator=="add":
#     print(a1)
# elif operator=="string":
#     print(a2)
        



# num=[[1,2],[2,3]]
# a=[]
# a1=[]
# a_add=0
# for i in range(len(num)-1):
#     for k in num:
        
#         add=k[0]+k[1]
#         a.append(add)
#         for l in k:
#             a1.append(l)
        
# print(a)
# print("''",a1,"''")
# a_add=a[0]+a[1]
# print(str(a_add))







        