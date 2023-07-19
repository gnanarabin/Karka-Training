'''num=int(input("i will add the number you give us \nnumber :"))


while num<100:
    total=input(f"the toal is so far is {num}\nnumber :")
    total=total+num
    print(total)
    if num==0:
        break'''

num=int(input("i will add the number you give us \nnumber :"))

while True:
    
    total=int(input(f"the total is so far {num}\nnumber :"))

    num=num+total
    
    if total==0:
        break
    print(num)
