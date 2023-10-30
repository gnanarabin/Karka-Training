import React, { useState } from 'react'
import Filter from './Filter'
import Products from './Products'
import Cart from './Cart'
import {product} from './json_products'


const Display = () => {
    const[size,setSize]=useState(null);
    const[all,setAll]=useState(false);
    const [cart,setCart]=useState([]);


    console.log("cart",cart);    
    function handle_fun(){
        setAll(!all)
    }

  return (
    <div className='main-div row m-0'>
        <div className='col-1'></div>
        <div className='col-9'>
            <div className='container row'>
                <div className='filter-div col-2'>
                    <Filter size={setSize}  click={handle_fun}/>
                </div>
                <div className='product-div col-10'>
                    <Products
                     setCart={setCart} 
                     data={product} size={size} filter={all} cart={cart}/>
                    {/* {cart.map(ele=>(<h1>hbs{ele.brand}</h1>))} */}
                    {/* <h1>{cart[0].brand}</h1> */}
                </div>
            </div>
        </div>
        <div className='col-2 ' >
            
        </div>
        
        <div className='cart-comp col-3'>
            <Cart 
                cart={cart} 
                />
        </div>

    </div>
  )
}

export default Display