name=input("Hey, what's your name ? ")
age=int(input(f"ok, {name}, How old are you ? "))

def fun (name,age):
    if age<16:
        print(f"you can't drive, {name}\n you can't vote, {name}\n you can't rent a car, {name}")
    elif age<18:
        print(f"you can't vote, {name}\n you can't rent a car, {name}")
    elif age<25:
        print(f"you can't rent a car, {name}")
    elif age>=25:
        print(f"You can do anything that's legal, {name}")

fun(name,age)