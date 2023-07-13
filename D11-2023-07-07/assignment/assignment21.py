import assignment7
height=float(input("Enter Your height in (m) Note: If you 'athletes' or\n 'too short' or 'too height' consult your doctor :"))
weight=float(input("Enter your Weight in (kg) :"))
BMI=assignment7.fun(height,weight)

if (BMI<18.5):
    print("you are in under weight")
elif (BMI<18.5) or (BMI<24.9):
    print("your are in normal weight")
elif (BMI<25.0) or (BMI <29.9):
    print("you are in overweight")
elif (BMI>30.0):
    print("you are in obese")