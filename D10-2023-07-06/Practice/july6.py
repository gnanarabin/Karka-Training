num=[23,54,4,5,1]
total=0

for number in num:
    print("b",total)
    total=total+number
    print("a",total)

     # Clear Explanation

num=[23,54,4,5,1]
total=0

enum_num=enumerate(num)
print(type(enum_num))
for i,number in enum_num:
    print("enter iteration",str(i))
    print("before sum",total)
    total=total+number
    print("after sum",total)
    print("Exit itration",i)
    print("\n")

    # Average using len() functon:

'''num=[23,54,4,5,1]
total=0
length=len(num)

for number in num:
    total=total+number
print("a",total/length)'''