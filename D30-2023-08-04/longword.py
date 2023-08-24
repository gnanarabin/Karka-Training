#          using split method

# a=input("Type :")

# b=a.split()

# l=len(b)
# n=len(b[0])

# for i in range(l):
#     length=len(b[i])
#     if length>=n:
#         n=length
#         name=b[i]
# print(n)
# print(f"{name} is the logest word")


          #OR

# a=input("Enter something :")

# word=a.split()

# l=len(word)

# sen1=word[0]

# for i in range(l):
#     sentence=word[i]
    
#     if sentence>=sen1:
#         sen1=sentence
#         name=word[i]
# print(sen1)
# print(f"{name} is the logest word")



n="hi iam rabin "
a=""
l=[]
for i in n:
    if i !=" ":
        a=a+i
        

    else:
        l=l+[a]
        a=""
        
print(l)





        

    






