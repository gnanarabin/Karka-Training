gender=input("What is your gender ( M or F ) :")
f_name=input("Your first_name :")
l_name=input("Your Last_name :")
age=int(input("Your age ? :"))
marry=input(f"Are you married ,{f_name} ( y or n ) ? :")

if ((gender=="m") or (gender=="f")):
    if (gender=="m") and (age>20):
        print(f"your name is mr.{f_name}{l_name}")
    elif(gender=="m") and (age<20):
        print(f"your name is {f_name}{l_name}")
    elif (gender=="f") and (age>20) and (marry=="y"):
        print(f"your name is mrs.{f_name}{l_name}")
    elif (gender=="f") and (age<20):
        print(f"your name is {f_name}{l_name}")

    
