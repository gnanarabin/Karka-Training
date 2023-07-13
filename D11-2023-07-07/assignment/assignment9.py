day=int(input("Enter the day of the week (1-0):"))

def fun(day):
    if day==1:
        print("Today is sunday")
    elif day==2:
        print("Today is monday")
    elif day==3:
        print("Today is Tuesday")
    elif day==4:
        print("Today is Wednesday")
    elif day==5:
        print("Today is Thursday")
    elif day==6:
        print("Today is friday")
    elif day==7:
        print("Today is saturday")
    elif day==0:
        print("Today is saturday")
    else:
        print("Error")

fun(day)

    