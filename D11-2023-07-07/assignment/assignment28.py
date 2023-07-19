print("\nkeychain shop")

current=0

price_per_keychain=10

sales_tax=8.25

ship_cost=5.00

add_ship_cost=1.00

def add_keychain(current):
        
    add=int(input(f"\nyou have {current} key chains, how many add :")) 
    current=current+add
    print(f"now you have {current} keychain")
    return current

def remove_keychain(current):

    remove=int(input(f"\nyou have {current} key chains . how many remove :"))
    current=current-remove
    print(f"now you have {current} key_chains")
    return current
    

def view_order(current,price_per_keychain):

    
    print(f"\nyou have {current} key_chains")
    price_per_keychain=price_per_keychain*current
    print(f"key_chains cost ${price_per_keychain} each")
    print(f"Tax {sales_tax}")
    print(f"total shipping charger ${ship_cost}")

    return price_per_keychain

    

def check_out(current,price_per_keychain):

    print("\ncheckout")
    name=str(input("\nwhat is your name ? :"))
    print(f" you have {current} key_chains")
    print(f"key_chains cost ${price_per_keychain} each")
    print(f"total cost is ${price_per_keychain}")
    print(f"thanks for your order , {name}")
    

while True:

    var1=int(input("\n1. add keychains to order \n2.remove keychains from order \n3. view current order \n4. check out \n please enter your choice :"))

    if var1==1:
        current= add_keychain(current)

    elif var1==2:
        current=remove_keychain(current)

    elif var1==3:
        price_per_keychain=view_order(current,price_per_keychain)

    elif var1==4:
        check_out(current,price_per_keychain)
        break
    else:
        print("\nError ! 'please select the given (1-4) numbers.'")
    

    

    

