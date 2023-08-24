
char=input("Enter :")

a=len(char)

def fun(char):
    num=False
    upper=False
    lower=False

    for i in char:
        if i.isupper():
            upper=True
        elif i.islower():
            lower=True
        elif i.isdigit():
            num=True
    
    if not (upper and lower and num):
        return "pass must contain onne upper one lower one digit"
    
    if a<6:
        return "week"
    elif (a>=6 and a<=10):
        return "moderate"

    elif (a>=11 and a<=15):
        return "strong"
        
    elif (a>16):
        return "very strong"

p=fun(char)
print(p)

    




    






# while True:

#     password=input("Enter ur pass :")
#     a=len(password)


#     if (password == password.capitalize()):
        

#         if a<6:
#             print("week")
#         elif (a>=6 and a<=10):
#             print("moderate")

#         elif (a>=11 and a<=15):
#             print("strong")
#             break

#         elif (a>16):
#             print("very strong")
#             break





