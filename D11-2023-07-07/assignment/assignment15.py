print("Two more question , \n Think somthing , i'll try to guess it .")

q1=input("Question 1) Does it stay 'inside' or 'outside' or 'both' :")
q2=input("Question 2) Is it 'alive' or 'not alive' ? :")

if (q1=="inside") and (q2=="alive"):
    print("i find it. you thought 'houseplant' right ?")
if (q1=="inside") and (q2=="not alive"):
    print("i find it. you thought 'shower curtain' right ?")
if (q1=="outside") and (q2=="alive"):
    print("i find it. you thought 'bison' right ?")
if (q1=="outside") and (q2=="not alive"):
    print("i find it. you thought 'billboard' right ?")
if (q1=="both") and (q2=="alive"):
    print("i find it. you thought 'dog' right ?")
if (q1=="both") and (q2=="not alive"):
    print("i find it. you thought 'cell phone' right ?")
