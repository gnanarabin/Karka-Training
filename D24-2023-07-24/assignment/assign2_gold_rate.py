m_g_r=[
    {
        "month":"janurary",
        "g_rate":3000,
    },
    {
        "month":"feb",
        "g_rate":3500,
    },
    {
        "month":"mar",
        "g_rate":2000,
    },
    {
        "month":"april",
        "g_rate":1890,
    },
    
]

"""a=len(m_g_r)
print(a)"""

"""res=m_g_r[0]["g_rate"]

for i in m_g_r:
    crr_rate=i["g_rate"]
    if res>crr_rate:
        
        res=crr_rate
print(res)"""

res=m_g_r[0]["g_rate"]
for i in m_g_r:
    crr=i["g_rate"]
    if crr<res:
        res=crr
print(res)


"""num=0


for i in m_g_r:
    if i["g_rate"]>num:
        num=i["g_rate"]
        m=i["month"]
    elif i["g_rate"]<num:
        l_num=i["g_rate"]
        l_month=i["month"]

month1={
    "month":m,
    "highest_mount":num,
    
}
month2={
    "month":l_month,
    "lowest_amount":l_num
}
print(month1)
print(month2)"""




    
            

    
    
        