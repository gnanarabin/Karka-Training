from datetime import date,datetime
from datetime import timedelta

'''l=int(input("enter :"))
d=int(input("day :"))
"""a=date.today()
print(a)

after=a+timedelta(day=l)
print(after)"""

a=datetime.now()
print(a)
after=a+timedelta(hours=l)
print(after)'''


a=input("enter date :")
b=datetime.strptime(a, "%d %b %Y %H" )
after=b+timedelta(days=10)
print(after)








