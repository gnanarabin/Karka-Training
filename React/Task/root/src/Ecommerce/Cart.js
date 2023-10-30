import React, { useState } from 'react'


const Cart = ({ cart, }) => {
    const [click, setClick] = useState(false)


    return (
        <div className='cart-div row'>

            {/* <hr /> */}
            {(click) ?
                <div className='row inside-cart' >
                    <div className='cart-true row '>
                        <button className='row' onClick={() => setClick(false)}>Close</button>
                        
                        <div className='true1 row p-0 m-0'>
                            {cart.map(ele => (
                                <div className='row p-0'>
                                    <div className='col-8'>
                                        <img src={ele.img}></img>
                                    </div>
                                    <div className='col-4'>
                                        <button>+</button>
                                        <button>-</button>
                                        <p>Quantity :{ele.quantity} </p>

                                        <p>Price : {ele.price} </p>
                                    </div>
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