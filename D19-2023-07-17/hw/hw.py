from pprint import pp
my_resume={
        "name":"Rabin",
        "e-mail":"jnrabin001@gmail.com",
        "mob-no":"6382548113",
        "soft_skill":["thinking","communication"],
        "hard_skill":["progamming","games"],
        "educational_qualification":[
            {
                "qualification":"sslc",
                "percentage":80,
                "passed_out":2016,
            },
            {
                "qualification":"hsc",
                "percentage":70,
                "passed_out":2018,
            },
            {
                "qualification":"BE",
                "percentage":77.9,
                "passed_out":2022,
            },
        ],

        "projects":{
            "programming":"create a E-commerce site using HTML,CSS,JS",
            "mechanical":"four-axis four wheel cutting machine",
        },
        "experience":[
            {
                "company_name":"digit-info-sollution",
                "place":"nagercoil",
                "roll":"web_design",
                "duration":0.5,
                "project":"cab website"
            },
            {
                "company_name":"tcs",
                "place":"chennai",
                "roll":"front-end-developer",
                "duration":1.0,
                "project":"websites "

            },
            {
                "company_name":"zoho",
                "place":"chennai",
                "roll":"back-end developer",
                "duration":1.0,
                "project":"applications",
            },
        ],
        "hobbies":["you-tube","movie","games"],
        "personal_details": {
            "name":"gnana Rabin J",
            "s/o":"Jesu Rethinam J",
            "father-occupation":"Tiles-work",
            "language_known":["tamil","english"],
            "DOB":"21-09-2000",
            "Gender":"Male",
            "Martial_status":"single",
            "address":{
                "door_no":1052,
                "street_name":"arokiya_matha_street",
                "village":"ramanputhur",
                "city":"Nagercoil",
                "district":"kanyakumari",
                "state":"tamilNadu",
            }
        }
}

for i in my_resume["personal_details"]:
    print(my_resume["personal_details"][i])
    #print(i)



'''for i in my_resume["soft_skill"]:
    print(i)


for i in my_resume["educational_qualification"]:

    qualification=i["qualification"]
    passed_out=i["passed_out"]

    print(qualification,passed_out)


print(my_resume["personal_details"]["address"]["city"])'''





    
