# n=5

# for i in range(1,n*2):
#     if i<=n:
#         a=i
#     else:
#         a=(n*2)-i
#     for k in range(a):
#         print("*",end="")
#     print()


       # easy method

n=5
for i in range(n):
    print("*"*i)
for k in range(n-1,0,-1):
    print("*"*k)