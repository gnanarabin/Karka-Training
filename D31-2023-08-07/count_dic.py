a="the quick brown fox jumps over the lazy dog the quick brown fox"
l=a.split()

d={}
for i in l:

    if i in d:
        d[i]=d[i]+1
    else:
        d[i]=1
print(d)


    

    


# l=["hi","iam","the","in","hi","iam"]
# len=len(l)
# d=[]
# for i in l:
#     count=0
#     for k in range(len):
#         if i == l[k]:
#             count=count+1
#             name=i
#     # print(count,i)
#     dic={
#         name:count
#     }
#     # print(dic)
#     if dic not in d:
#         d.append(dic)
# print(d)
    
        


    




