#1.Build a list of dictionaries representing cricket players from five different countries. Include details such as name, number of centuries, half-centuries, wickets taken, hat-trick wickets, and top batting scores.


p_list=[
    {
        "name":"Jadeja",
        "centuries":20,
        "half_centuries":15,
        "wickets_taken":300,
        "hat_trick_wickets":3,
        "batting_score":[60,30,43,54,38],
        
    },

    {
        "name":"smith",
        "centuries":10,
        "half_centuries":20,
        "wickets_taken":130,
        "hat_trick_wickets":1,
        "batting_score":[100,64,120,256,115],
        

    },
    {
        "name":"buttler",
        "centuries":15,
        "half_centuries":20,
        "wickets_taken":100,
        "hat_trick_wickets":1,
        "batting_score":[93,65,104,110,60],
        

    },

    {
        "name":"williamson",
        "centuries":7,
        "half_centuries":15,
        "wickets_taken":150,
        "hat_trick_wickets":0,
        "batting_score":[50,84,72,65,89],
        

    },

    {
        "name":"bravo",
        "centuries":6,
        "half_centuries":25,
        "wickets_taken":400,
        "hat_trick_wickets":4,
        "batting_score":[67,83,50,84,76],
        

    },
]
#print(p_list)

#2.Determine and display the number of players who have scored more than 10 centuries from the list.


def cen(p_list):
    name=[ ]
    centuries=[]
    for i in p_list:
        if i["centuries"]>10:
            name=i["name"]
            centuries=i["centuries"]
            return name,centuries
        
a=cen(p_list)
print(a)   






# 3.Find and display the players who have taken more than 5 hat-trick wickets.

'''def hat(p_list):
    
    for i in p_list:
        if i["hat_trick_wickets"]>5:
            name=i["name"]
            return name'''



# 4.Identify and display the top batting score achieved by the players



'''def fun(p_list):
    
    for i in p_list["batting_score"]:
        max=0
        name=i["name"]
        if i > max:
            max=i
            print(f"{name}")

fun(p_list)'''


