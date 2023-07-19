
'''current_no_key=0
cost_per_keychain=10

def add_keychains(current_no_key):

    add=int(input(f"you have {current_no_key}. how many to add :"))
    current_no_key=current_no_key+add
    print(f"you now have {current_no_key} keychains")
    return current_no_key
    fun()

def remove_keychains(current_no_key):

    remove=int(input(f"you have {current_no_key}. how many remove :"))
    current_no_key=current_no_key-remove
    print(f"you now have {current_no_key} keychains")
    return current_no_key
    fun()

def view_order (cost_per_keychain):

    print(f"keychain cost {cost_per_keychain} each")
    cost_per_keychain=current_no_key*2
    print(f"total cost is {cost_per_keychain}")
    print(f"you have {current_no_key} keychains")
    return cost_per_keychain
    fun()

def checkout(current_no_key,cost_per_keychain):
    print("check_out")
    name=str(input("what is your name ? :"))
    print(f"you have {current_no_key} keychains")
    print(f"keychain cost {cost_per_keychain} each")
    print(f"total cost is {cost_per_keychain}")
    print(f"thanks for your order {name}")



def fun():
    input1=int(input("lap store \n 1. Add keychains to order \n 2. remove keychains from order \n 3.View current order \n 4.Checkout \n please enter your choice :"))

    if input1==1:
        add_keychains(current_no_key)

    elif input1==2:
        remove_keychains(current_no_key)

    elif input1==3:
        view_order(current_no_key,cost_per_keychain)
        
    elif input1==4:
        checkout(current_no_key,cost_per_keychain)
            
fun()'''
    














