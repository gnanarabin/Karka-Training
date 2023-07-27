'''Task: Calculate Electricity Bill

You are given the electricity meter readings for a consumer for the last five months. Your task is to calculate the electricity bill based on the given tariff rates.

Instructions:


Create a Python function called "calculate_electricity_bill" that takes a dictionary as input containing the consumer's name and a list of electricity meter readings for the past five months.

Calculate the electricity units consumed for each month by finding the difference between consecutive readings.

Calculate the bill amount for each month based on the following tariff rates:

If the unit consumption is below 100, there is no amount to pay.
For unit consumption between 100 and 200 , the rate is 2rs per unit.
For unit consumption between 200 and 500 , the rate is 5rs per unit.
For unit consumption between 500 and 1000, the rate is 10rs per unit.
For unit consumption of 1000 and above, the rate is 14rs per unit.
Calculate the total bill amount by summing up the bill amounts for all months.

Return the consumer's name, the bill amount for each month, and the total bill amount as a dictionary.

Use the provided example input to test your function.

Sample Input:
consumer_data = {
    "consumer_name": "user",
    "eb_reading": [1100, 1200, 1350, 1650, 2050]
}'''


data={
    "name":"Rabin",
    "eb_reading":[1100, 1210, 1350, 1650, 2150]
}

li=[]



#print(a)

a=data["eb_reading"]
li.append(a)
#print(li)
b=li[0]
#print(b)
c=li[0][0]
#print(c)

for i in b:
    sum=i-c
    if sum<100:
        print(f"month:1\nunit_consumed :{sum}\nbill_amount :0\n")


    elif (sum>100 and sum<200):
        amount1=sum*2
        print(f"month:2\nunit_consumed :{sum}")
        print(f"bill_amount :{amount1}\n")

    elif (sum>200 and sum<500):
        amount2=sum*5
        print(f"month:3\nunit_consumed :{sum}")
        print(f"bill_amount :{amount2}\n")


    elif (sum>500 and sum<1000):
        amount3=sum*10
        print(f"month:4\nunit_consumed :{sum}")
        print(f"bill_amount :{amount3}\n")


    elif (sum>1000):
        amount4=sum*14
        print(f"month:5\nunit_consumed :{sum}")
        print(f"bill_amount :{amount4}\n")

total=amount1+amount2+amount3+amount4

print(f"total :{total}")




'''
r1=int(input("Enter the 'first' readings:"))
r2=int(input("Enter the 'second' readings:"))
r3=int(input("Enter the 'third' readings:"))
r4=int(input("Enter the 'fourth' readings:"))
r5=int(input("Enter the 'fifth' readings:"))

name=input("enter your name :")


#print(a)
#print(f)


def electricity_bill_readings(r1,r2,r3,r4,r5):

    d={
        "name":name,
        "readings":[r1,r2,r3,r4,r5]
    }
    a=d["readings"]
    print(a)
    f=a[0]
    print(f)

    for i in a:
        reading=i-f
        print(reading)

        if reading>100:
            print(f"month:1\nunit_consumed :{reading}\nbill_amount :0\n")

        elif (reading>100 and reading <200):
            amount1=reading*2
            print(f"month:2\nunit_consumed :{reading}")
            print(f"bill_amount :{amount1}\n")

        elif (reading>200 and reading<500):
            amount2=reading*5
            print(f"month:2\nunit_consumed :{reading}")
            print(f"bill_amount :{amount2}\n")

        elif (reading>500 and reading<1000):
            amount3=reading*10
            print(f"month:2\nunit_consumed :{reading}")
            print(f"bill_amount :{amount3}\n") 

        elif (reading>1000):
            amount4=reading*14
            print(f"month:2\nunit_consumed :{reading}")
            print(f"bill_amount :{amount4}\n") 
    
    

electricity_bill_readings(r1,r2,r3,r4,r5)








'''
    


    

    








    
    






    


    


