l=[
    {
        "name":"rabin",
        "email":"jnrabin001@gmail.com",
        "password":"21sep2000",
        "hobbies":["cricket","games","movies"],
        "frnds_li":["q","w","e"]
    },
    {
        "name":"rabi",
        "email":"rabi@gmail.com",
        "password":"12345",
        "hobbies":["games","movies","cricket"],
        "frnds_li":["b","u","l"]
    },
    {
        "name":"rab",
        "email":"rab@gmail.com",
        "password":"123456789",
        "hobbies":["movies","cricket","games"],
        "frnds_li":["w","k","r"]
    }
]

email=input("Enter the email :")
password=input("Enter the password :")

def fun(a,b,c):
    def hob (txt,lis):
        print(txt)
        for k in lis: 
            print(k,",",end="")
        print("")
        
    for i in a:
        if (b==i["email"]) and (c==i["password"]):
            #i.update({"log":True})
            i["log"]=True
            print(i)
            # print("your hobbies is :",i["hobbies"])
            # print("your friends are :",i["frnds_li"])
        else :
            #i.update({"log":False})
            i["log"]=False
            print(i)
            

    hob('hobbies',i["hobbies"])
    hob("frnds_list",i["frnds_li"])

fun(l,email,password)



