num=[2, 3, 5, 4, 7, 9, 8, 5]
sum=9
len=len(num)


for i in range(len):
    for k in range(i):
        if (num[i])+num[k]==sum:
            print(f"The Pairs of {sum} is :{num[i]},{num[k]}\n",end="")
            # print((num[i],num[k]),end="")
        
