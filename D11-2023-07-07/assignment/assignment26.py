def add_laptop():
    print("add_laptop")
    fun()

def remove_laptop():
    print("remove_laptop")
    fun()

def view_order ():
    print("view_order")
    fun()

def checkout():
    print("check_out")

def fun():
    input1=int(input("lap store \n 1. Add laptop to order \n 2. remove laptop from order \n 3.View current order \n 4.Checkout \n please enter your choice :"))

    if input1==1:
        add_laptop()

    elif input1==2:
        remove_laptop()

    elif input1==3:
        view_order()
        
    elif input1==4:
        checkout()
            
fun()
    














