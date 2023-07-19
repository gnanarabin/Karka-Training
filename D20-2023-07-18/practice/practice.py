

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


for i in education_details:
    print (i["study"])
    for k in education_details:
        print(i["sem_marks"])

    

    
    


    