'''1. Find sum of all numbers in a list using iteration
2. After finding sum, find average
3. Given a list of cost of a product, create another list with the cost with currency code
Say, input 
prods = [500, 200, 700, 1000] 

Output,  ["INR 500", "INR 200", "INR 300", "INR 1000"]'''

num=[2,6,5,9,4]
total=0
for i in num:
    total=total+i
print(total)

'''num=[2,6,5,9,4]
total=0
for i,numbers in enumerate (num):
    total=total+numbers
print(total)'''


   # Average with len() Function

'''num=[23,54,4,5,1]
total=0


for number in num:
    total=total+number
print(total)'''

'''amount=[200,500,100,1000,2000]
amount1=[]

for i in amount:

    sym=("INR "+str(i))
    amount1.append(sym)
print(amount1)'''
    

