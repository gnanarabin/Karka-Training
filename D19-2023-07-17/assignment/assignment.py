a=[
    {    
            "name":"rabin",
            "place":"ramanputhur",
            "hobbies":["youtube","games","movies"],
            "sslc":{
                "tamil":80,
                "english":72,
                "maths":86,
                "science":96,
                "social":88
            },
        },

        {   
            "name":"kavish",
            "place":"vadseri",
            "hobbies":["games","riding","movies"],
            "sslc":{
                "tamil":96,
                "english":90,
                "maths":96,
                "science":86,
                "social":99
            },
            
        },

        {   
            "name":"rashika",
            "place":"paraseri",
            "hobbies":["watching_Tv", "sleeping","listing_music"],
            "sslc":{
                "tamil":98,
                "english":84,
                "maths":90,
                "science":89,
                "social":95
            },
        },
]

for i in a[0]["sslc"]:
    print(a[0]["sslc"][i])



#print(name[0]["sslc"]["tamil"])



"""for i in a:
    #print(i["sslc"]["tamil"])

    tamil=i["sslc"]["tamil"]
    english=i["sslc"]["english"]
    maths=i["sslc"]["maths"]
    science=i["sslc"]["science"]
    social=i["sslc"]["social"]
    name=i["name"]


    total=tamil+english+maths+science+social

    #print(f"{name},{total}")

    l=len(i["sslc"])

    length=total/l
    print(length)


    if length>85 and maths>95:
        print(f"{name}_you will eligible to choose maths biology and computer science")

    elif length>80 and science>95:
        print(f"{name}_you will eligible to choose computer science and maths biology")
    
    elif length>90:
        print(f"{name}_you will eligible to choose maths biology")

    elif length>85:
        print(f"{name}_you will eligible to choose computer science")"""
    



    













    

 


