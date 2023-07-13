print("keychain shop")



def add_keychain():
    key_chain=int(input("you have 0 key_chains how many add ? :"))
    print(f"now you have {key_chain} key_chain")
    fun()

def remove_keychain():
    key_chain=int(input(f"you have {key_chain} key_chains how many remove ? :"))
    print(f"now you have {key_chain} key_chain")
    fun()

def view_order():
    print("now you have {key_chain} key_chain")
    fun()

def check_out():
    print("checkout")

    
def fun():

    var1=int(input("1. add keychains to order \n2.remove keychains from order \n3. view current order \n4. check out \n please enter your choice :"))

    if var1==1:
        add_keychain()

    if var1==2:
        remove_keychain()

    if var1==3:
        view_order()

    if var1==4:
        check_out()

    

fun()

    

