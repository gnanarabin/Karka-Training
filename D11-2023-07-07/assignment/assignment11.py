weight=int(input("Enter your current weight :"))
planet=int(input("I have the information for following planets \n 1.venus \t 2.mars \t 3.Jupiter \n 4.saturn \t 5.uranus \t 6.neptune \n Which planet are you visiting ? :"))

def fun(planet,weight):

    if planet==1:
        w1=weight*0.78
        print(f"Your weight would be {w1} pounds on the planet")
    elif planet==2:
        w2=weight*0.39
        print(f"Your weight would be {w2} pounds on the planet")
    elif planet==3:
        w3=weight*2.65
        print(f"Your weight would be {w3} pounds on the planet")
    elif planet==4:
        w4=weight*1.75
        print(f"Your weight would be {w4} pounds on the planet")
    elif planet==5:
        w5=weight*1.05
        print(f"Your weight would be {w5} pounds on the planet")
    elif planet==6:
        w6=weight*1.23
        print(f"Your weight would be {w6} pounds on the planet")
    else:
        print("sorry i can't find ")
        
fun(planet,weight)


