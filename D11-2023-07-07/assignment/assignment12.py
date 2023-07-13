rdy=str(input("are you ready for a quiz :"))
q1=0



q1=int(input("ok here it comes !\n \n Q1) What is capital of alska ? \n\n\t 1)melbourne \n\n\t 2)Anchorage \n\n\t 3)Juneau\n\n :"))

value=0
q=0

if q1==3:
    print("That's right")
    q=q+1
    value=value+1
elif q1==1:
    print(f"Sorry ,'melbourne' not the capital of alska .")
elif q1==2:
    print(f"Sorry ,'Anchorage' not the capital of alska .")

    

q2=int(input("Q2)can u store the value 'cat' in a variable of type int ? \n\n\t 1)yes \n\n\t 2)no :\n\n"))


if q2==2:
    q=q+1
    value=value+1
    print("That's right")
else:
    print("sorry , 'cat' is a string . ints can only store  numbers")


q3=int(input("Q3)What is result of 9+6/3 \n\t\t 1) 5 \n\t\t 2) 11 \n\t\t 3) 15/3 :\n\n" ))


if q3==2:
    value=value+1
    q=q+1
    print(f"That's correct\n\n over all you got {value} out of {q}")
elif q3==1:
    print(f"Sorry 5 is not the result of 9+6/3 \n\n over all you got {value} out of {q}")
elif q3==3:
    print(f"Sorry 15/3 is not the result of 9+6/3 \n\n over all you got {value} out of {q}")
    



    
