l=[[1,2,3,[4,5]],[6,7,[8,9]],[10,[11,12,13]]]

def fun(l):
    for i in l:
        if type(i)==list:
            fun(i)
        else:
            print(i,end=" ")

fun(l)


    






    

    

        

    
    