from datetime import datetime
from datetime import timedelta
"""a=datetime(2023,7,25,12,30,50)
print(a)
b=a.year  # .year, .month, .day , .hour , .minute , .second
print(b)
c=datetime.now()
print(c)
d=c.strftime("%r") # (%h,Y,D,m,etc....)
print(d)"""

"""a="26, july, 2023"
b=datetime.strptime(a,"%d, %B, %Y")   # %B is use for convert sring to number ('july-7')
c=b.month
print(c) """
a="26, july, 2023"
b=datetime.strptime(a,"%d, %B, %Y") 

"""date_string = "21 June, 2018"

print("date_string =", date_string)
print("type of date_string =", type(date_string))

date_object = datetime.strptime(date_string, "%d %B, %Y")
print("date_object =", date_object)"""





