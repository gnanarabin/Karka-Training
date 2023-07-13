'''num1=int(input("Enter The First Number :"))
operator=input("Enter The Operator :")
num2=int(input("Enter The Second Number :"))

add=num1+num2
sub=num1-num2
mul=num1*num2
dev=num1/num2
mod=num1%num2
twice=num1**num2

if (operator== "+") :
    print(add)
if (operator=="-"):
    print(sub)
if (operator=="*"):
    print(mul)
if (operator=="/"):
    print(dev)
if (operator=="%"):
    print(mod)
if (operator=="**"):
    print(twice)'''
'''num1=int(input("Enter The First Number :"))
operator=input("Enter The Operator :")
num2=int(input("Enter The Second Number :"))

def function (num1,operator,num2):
    if (operator=="+"):
        print(num1+num2)
    elif (operator=="-"):
        print(num1-num2)
    elif (operator=="*"):
        print(num1*num2)
    elif (operator=="/"):
        print(num1/num2)
    elif (operator=="%"):
        print(num1%num2)
    elif (operator=="**"):
        print(num1**num2)
    else:
        print("Please use +,-,*,/,%,** this type Operators")
function(num1,operator,num2)'''

num1=int(input("Enter The First Number :"))
operator=input("Enter The Operator :")
num2=int(input("Enter The Second Number :"))

def add (num1,operator,num2):
    if (operator=="+"):
        print(num1+num2)
add(num1,operator,num2)

def sub (num1,operator,num2):
    if (operator=="-"):
        print(num1-num2)
sub(num1,operator,num2)

def mul (num1,operator,num2):
    if (operator=="*"):
        print(num1*num2)
mul(num1,operator,num2)

def dev (num1,operator,num2):
    if (operator=="/"):
        print(num1/num2)
dev(num1,operator,num2)

def mod (num1,operator,num2):
    if (operator=="%"):
        print(num1%num2)
mod(num1,operator,num2)

def twice (num1,operator,num2):
    if (operator=="**"):
        print(num1**num2)
    else:
        print("Please use + , - , * , / , % , ** this type operators")
twice(num1,operator,num2)




