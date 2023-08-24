a=0
b=1
n=int(input("enter :"))

for i in range(n):
    print(a,"",end="")
    ans=a+b
    a=b
    b=ans
    