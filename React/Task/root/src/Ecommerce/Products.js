import React, { useEffect, useRef, useState } from 'react'
import { product } from './json_products'



function Products_List({ img, brand, price,quantity, setCart ,cart}) {
    const [mouse, setMouse] = useState(null)

    function handleMouseEnter(){
        setMouse(true)
        // console.log("yes",mouse);
    }
    function handleMouseLeave(){
        setMouse(false)
        // console.log("no",mouse);
    }
    function handle_click(e) {
        const add = product.find(ele => ele.brand === e.target.name);
    
        if (cart) {
          const itemInCartIndex = cart.findIndex(ele => ele.brand === e.target.name);
          if (itemInCartIndex !== -1) {
            // If the item is in the cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[itemInCartIndex].quantity += 1;
            // updatedCart[itemInCartIndex].price += updatedCart[itemInCartIndex].price
            setCart(updatedCart);
          } else {
            // If the item is not in the cart, add it with a quantity of 1
            add.quantity = 1;
            setCart(prev => [...prev, add]);
          }
        } else {
          // If the cart is empty, add the product with a quantity of 1
          add.quantity = 1;
          setCart([add]);
        }
      }

    return (

        <div className='product-detail col-3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div className='img-div'>
                <img src={img}></img>
            </div>
            <div className='product-description'>
                <div className='brand-detail'>
                    <p>{brand}</p>
                </div>
                <hr />
                <p>$<span style={{ fontWeight: "bold", fontSize: "25px" }}>{price}</span></p>
            </div>
            <p>{quantity}</p>
            <button onClick={handle_click} name={brand}
            className= {(mouse) ? "hoverbtn" :"unhoverbtn" }
            >Add to cart</button>
        </div>

    )
}

const Products = ({ data, size, filter, setCart ,cart}) => {

    return (
        <div>
            <div className='product-head'><p>16 Product(s) found</p></div>
            <div className='row'>

                {(filter) ? data.filter(ele => ele.size == size).map(ele => (<Products_List 
                // data ={handleData} 
                setCart={setCart} cart={cart}
                {...ele} />))  : product.map(ele => (<Products_List {...ele} 
                //  data ={handleData} 
                setCart={setCart} cart={cart}
                 />))}


            </div>
        </div>
    )
}

export default Products

  // function handle_click(e) {
    //     const add = product.find(ele => ele.brand === e.target.name);
    
    //     if (cart) {
    //       const itemInCartIndex = cart.findIndex(ele => ele.brand === e.target.name);
    //       if (itemInCartIndex !== -1) {
    //         // If the item is in the cart, update its quantity
    //         const updatedCart = [...cart];
    //         updatedCart[itemInCartIndex].quantity += 1;
    //         setCart(updatedCart);
    //       } else {
    //         // If the item is not in the cart, add it with a quantity of 1
    //         add.quantity = 1;
    //         setCart(prev => [...prev, add]);
    //       }
    //     } else {
    //       // If the cart is empty, add the product with a quantity of 1
    //       add.quantity = 1;
    //       setCart([add]);
    //     }
    //   }
