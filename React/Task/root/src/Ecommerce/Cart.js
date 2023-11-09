import React, { useState } from 'react'


const Cart = ({ cart, setCart}) => {
    const [click, setClick] = useState(false)

    function increse_quantity(brand){
        setCart((prev)=>{
            return prev.map((item)=>{
                if(item.brand==brand){
                    return {...item,quantity:item.quantity + 1};
                }
                return item
            })
        })
    }
    function decrease_quantity(brand){
        setCart((prev)=>{
            return prev.map((item)=>{
                if(item.brand==brand){
                    return ({...item,quantity:item.quantity-1})
                }
                return item
            })
        })
    }
    function handle_remove(brand){

            setCart((prev)=>{
                return prev.filter((item)=>{
                    if(item.brand!==brand){
                        return brand
                    }
                })
            })
    }
    
    function payment_click(quantity,price){
        alert(`${quantity} \n price : ${price*quantity}`)
    }
    return (
        <div className='cart-div row'>

            {/* <hr /> */}
            {(click) ?
                <div className='row inside-cart m-0 p-0' >
                    <div className='cart-true row m-0 '>
                        <div className='close-btn'>
                            <button className='row' onClick={() => setClick(false)}>Close</button>
                        </div>                        
                        <div className='true1 row p-0 m-0 '>
                            {cart.map(ele => (
                                <div className='img-detail row m-0 p-0'>
                                    <div className='col-8'>
                                        <img src={ele.img1}></img>
                                    </div>
                                    <div className='col-4'>
                                        <button onClick={()=>increse_quantity(ele.brand)}>+</button>
                                        <button onClick={()=>decrease_quantity(ele.brand)}>-</button>
                                        <p>Quantity :{ele.quantity} </p>

                                     

                                        <p>Price : {(ele.price)*(ele.quantity)} </p>
                                        <button onClick={()=>payment_click(ele.quantity,ele.price)}>Payment</button>
                                        <button onClick={()=>handle_remove(ele.brand)}>Remove</button>
                                    </div>
                                    <hr></hr>

                                </div>
                            ))}

                        </div>

                    </div>
                </div>

                :

                <div className='cart-div-btn'>
                    <button className='cart-btn' type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={() => setClick(true)}>Cart</button>
                </div>
            }
        </div>
    )
}

export default Cart