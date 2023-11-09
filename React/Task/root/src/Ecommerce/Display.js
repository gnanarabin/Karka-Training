import React, { useState } from 'react'
import Filter from './Filter'
import Products from './Products'
import Cart from './Cart'
import {product} from './json_products'
import './CSS/style.css'


const Display = () => {
    const[size,setSize]=useState(null);
    const [cart,setCart]=useState([]);
    console.log("size",size);

    console.log("cart",cart);      

  return (
    <div className='main-div row m-0'>
        <div className='col-1'></div>
        <div className='col-9'>
            <div className='container row'>
                <div className='filter-div col-2'>
                    <Filter size={setSize} />
                </div>
                <div className='product-div col-10'>
                    <Products
                     setCart={setCart} 
                     data={product} size={size}  cart={cart}/>
                    
                </div>
            </div>
        </div>
        <div className='col-2 ' >
            
        </div>
        
        <div className='cart-comp col-3'>
            <Cart 
                cart={cart} setCart={setCart}/>
        </div>

    </div>
  )
}

export default Display