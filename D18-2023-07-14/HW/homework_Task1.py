#Create a list of dictionaries that includes the details of yourself and your friends, such as name, age, and place.

#1.Write a function to format and print a string that includes the name, age, and place of each person in the list. For example: "I am [name], I'm [age] years old, and I'm from [place]."



name_list=[
    {
        "name":"Rabin",
        "age":22,
        "place":"Ramanputhur"
    },
    {
        "name":"Dixson",
        "age":21,
        "place":"punnainager"
    },
    {
        "name":"adshai",
        "age":24,
        "place":"chennai"
    }
]

'''def fun(name_list):

    print(f"hi iam",(name_list[0]["name"]),"iam",(name_list[0]["age"]),"old,""and iam from",(name_list[0]["place"]))
    print(f"hi iam",(name_list[1]["name"]),"iam",(name_list[1]["age"]),"old,""and iam from",(name_list[1]["place"]))
    print(f"hi iam",(name_list[2]["name"]),"iam",(name_list[2]["age"]),"old,""and iam from",(name_list[2]["place"]))


fun(name_list)'''

'''def fun(name_list):
    for i in name_list:
        name=i["name"]
        age=i["age"]
        place=i["place"]
        print(f" hi,iam {name} iam {age} old ,and iam from {place}")

fun(name_list)'''
        

#2.Write a function to iterate over the list and print the name and place of individuals whose age is above 21.

def fun(name_list):

    for i in name_list:
        

        if i["age"]>21:
            name=i["name"]
            place=i["place"]
            print(f"iam {name},iam from {place}")
        
        
a=fun(name_list)
print(a)



