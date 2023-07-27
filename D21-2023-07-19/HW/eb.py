
r1=int(input("Enter the 'first' readings:"))
r2=int(input("Enter the 'second' readings:"))
r3=int(input("Enter the 'third' readings:"))
r4=int(input("Enter the 'fourth' readings:"))
r5=int(input("Enter the 'fifth' readings:"))

name=input("enter your name :")


#print(a)
#print(f)




d={
    "name":name,
    "readings":[r1,r2,r3,r4,r5]
}
a=d["readings"]
#print(a)

#for i in range(len(a)):
b=len(a)
#print(b)



def electricity_bill_amount(a,b) :

    bill=[]

    for i in range(0,b-1):

        reading=a[i+1]-a[i]

        if reading<=100:
            amount=0    # must use amount 
            print("you dont have to pay")

        elif (reading>100 and reading<=200): 
            amount=reading*2
            
        elif (reading>200 and reading<=500):
            amount=reading*5

        elif (reading>500 and reading<=1000):
            amount=reading*10

        elif (reading>1000):
            amount=reading*14
        
        month=i+1

        dict={
            "month":month,
            "unit_consumed":reading,
            "bill_amount":amount
        }
        bill.append(dict)
    return bill


l=electricity_bill_amount(a,b)
for i in l:
    print(l)





