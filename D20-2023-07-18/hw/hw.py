items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]

'''Output: 
{
'Fruits': ['Apple', 'Banana'], 'Vegetables': ['Carrot', 'Broccoli']
}'''   

    # hints:

'''name="Rabin"

dic_name={"name":name}

print(dic_name)'''

fruits=[]
vegetable=[]


for i in items_list:

    if i['category']=='Fruits':
        fruits.append(i['name'])

    elif i['category']=='Vegetables':
        vegetable.append(i['name'])
        
print(fruits)
print(vegetable)

dic={"fruits":fruits,"vegetables":vegetable}
print(dic)

            #   O R  
            
fruit=[]
vegetable=[]

for i in items_list:
    if i["category"]=="Fruits":
        a=i["name"]
        fruit.append(a)


    elif i["category"]=="Vegetables":
        b=i["name"]
        vegetable.append(b)
        
print(fruit)
print(vegetable)

d={
    "fruits":fruit,"vegetables":vegetable
}
print (d)



      



#print(items_list[0]["name"])