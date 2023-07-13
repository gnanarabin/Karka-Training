input=int(input("Enter the number ( 1-100) :"))

if (input%3==0) and (input%5==0):
    print("FizzBuzz")
elif input%5==0:
    print("Buzz")
elif input%3==0:
    print("Fizz")
    