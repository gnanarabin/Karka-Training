from pprint import pp


education_details=[
    {
        "study":"mech",
        "institute":"DMI",
        "sem_marks":[
            {
                "semester_name":1,
                "subjects":["thermodynamics","fluid",],
                "sem_grade":"A",
            },
            {
                "semester_name":2,
                "subjects":["maths","kynametics",],
                "sem_grade":"b+",
            }
        ]

    }
]


"""for i in education_details:
    pp (i["study"])
    for k in education_details:
        pp(i["sem_marks"])"""

for i in education_details:
    pp (i["study"])
    for k in i["sem_marks"][0]["subjects"]:
        pp(k)

    

    
    


    