print("Welcome To Adventure")
q1=input("You are in house . would you like to go 'upstairs' or 'kitchen' ? :")


if q1== "kitchen":
    kit=input("What would u like in kitchen . 'food' or open 'refrigirator' ? :")
    if kit=="refrigirator":
        ref=input("what would you like in refrigirator . 'snacks' or 'juice' ? :")
        if ref=="snacks":
            print("i thought u would like juice  ")
        elif ref=="juice":
            print("i thought u would like snacks ")
    elif kit=="food":
        food=input("would u take 'biriyani' or 'sapathi' ? : ")
        if food=="biriyani":
            print("iam also like biriyani")
        elif food=="sapathi":
            print(" i think you would take 'biriyani'")
elif q1=="upstairs":
    print("nothing in upstairs")
    