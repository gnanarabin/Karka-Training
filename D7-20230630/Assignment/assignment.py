input= int (input("Enter the year:"))
lp_yr=(input%4==0 and input%100!=0) or (input%400==0)  
if (lp_yr):
    print(lp_yr,"its leap year")
else:
    print(lp_yr,"its not leap year")

