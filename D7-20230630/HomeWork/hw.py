                #HW-1

'''name=str(input("Enter your Name :"))
age=int(input("Enter your Age :"))
DOB=(input("Enter your DOB :"))
location=str(input("Enter your location :"))
Clg_name=str(input("Enter your College Name :"))
No=int(input("Enter Any number:"))

print("Hello,My name is",name,".Iam",age,"year old and i was born on",DOB,".Currently iam located in",location,"and iam completed my degree at",Clg_name)

                #HW-2

age=int(input("Enter your Age :"))
if (age>18):
    print("you are eligible to vote")
else:
    print("you are not eligible to vote")

                #HW-3
    
no=int(input("Enter any number :"))
if (no%2==0):
    print(no,"is an Even number")
else:
    print(no,"is an odd number")'''

                #HW-4

item1=int(input("Enter the amount of item1 :"))
item2=int(input("Enter the amount of item2 :"))
item3=int(input("Enter the amount of item3 :"))
item4=int(input("Enter the amount of item4 :"))

items=item1+item2+item3+item4

if (items>500 and items<1000) :
    print("you have won a silver token")
elif (items>1000):
    print("you have won a golden token")
else:
    print("Please purchase btwen 500 and 1000 (or) above 1000 ")