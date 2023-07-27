from pprint import pp
gold_rate=[
    {
        "month":"janurary",
        "g_rate":3000,
        "jwell_list":[
            {
                "name":"chain",
                "making_cost":12.
            },
            {
                "name":"ring",
                "making_cost":14.
            }
        ]
    },
    {
        "month":"feb",
        "g_rate":3500,
        "jwell_list":[
            {
                "name":"chain",
                "making_cost":10.
            },
            {
                "name":"ring",
                "making_cost":12.
            }
        ]
    },
    {
        "month":"mar",
        "g_rate":2000,
        "jwell_list":[
            {
                "name":"chain",
                "making_cost":15.
            },
            {
                "name":"ring",
                "making_cost":14.
            }
        ]
    },
    {
        "month":"april",
        "g_rate":1890,
        "jwell_list":[
            {
                "name":"chain",
                "making_cost":11.
            },
            {
                "name":"ring",
                "making_cost":10.
            }
        ]
    },
    
]

li=[]
for i in gold_rate:
    gold=i["g_rate"]
    month=i["month"]
    li.append(month)
    li.append(gold)
    #print(f"{month}-->")
    for n in i["jwell_list"]:
        cost=n["making_cost"]/100
        
        #print(cost1)

        total_m_cost=gold*cost
        name=n["name"]
        

        
        #print(total_m_cost,name)

        total_gold_cost=gold+total_m_cost
        #print(total_gold_cost,total_m_cost,name,month)
        d={
            
            "jwell_name":name,
            "rate":total_gold_cost,

        }
        li.append(d)
        #print(f"name :{name}\ntotal_rate :{total_gold_cost}\n")
        
pp(li)

    
