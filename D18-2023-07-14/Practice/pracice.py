from pprint import pp
name=[
        {
            "name":"aswsin",
            "place":"nagercoil",
            "hobbies":["cricket","movies"],
        },

        {
            "name":"devipriya",
            "place":"aralvaimozhi",
            "hobbies":["listening_music","playing_dog","watching_movies",]
        },

        {    
            "name":"reshma",
            "place":"marthandam",
            "hobbies":["cooking","gardening","listening",]
        },

        {    
            "name":"rabin",
            "place":"ramanputhur",
            "hobbies":["youtube","games","movies",]
        },

        {   
            "name":"kavish",
            "place":"vadseri",
            "hobbies":["games","riding","movies",]
        },

        {   
            "name":"rashika",
            "place":"paraseri",
            "hobbies":["watching_Tv, sleeping,listing_music",]
        },

        {   
            "name":"sulaebhu",
            "place":"panakudi",
            "hobbies":["watching_tv,listening_music,using_mobile",]
        },
]

#print(name[3]["hobbies"])

"""for i in name[3]["hobbies"] :

    print(i)"""
for i in name:
    hobie=i["hobbies"]
    print(hobie)


'''name1={   
        "name":"sulaebhu",
        "place":"panakudi",
        "hobbies":"watching_tv,listening_music,using_mobile",
        }
print(name1["name"])'''





'''marks= {
    "tamil":97,
    "english":72,
    "maths":85,
    "science":70,
    "social":98
}

print(marks.items())
print(marks.values())
print(marks.keys())'''