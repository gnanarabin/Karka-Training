name=(input("Hey, what's your name ? (sorry i keep forgetting .) : "))
age=int(input(f"Ok, {name} , how old are you ? :"))

def fun(age):
    if age<16:
        print("you can't drive")
    elif (age==16 or age==17) :
        print("you can drive,But not vote")
    elif (age==18 or age==25):
        print("You can vote but not rent a car")
    elif(age>25):
        print("You can do pretty much anything")
fun(age)