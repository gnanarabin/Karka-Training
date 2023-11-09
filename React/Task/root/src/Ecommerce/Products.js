import React, { useEffect, useRef, useState } from 'react'
import { product } from './json_products'



function Products_List({ img1,img2, brand, price,quantity, setCart ,cart}) {
    const [mouse, setMouse] = useState(null)

    function handleMouseEnter(){
        setMouse(true)

        // console.log("yes",mouse);
    }
    function handleMouseLeave(){
        setMouse(false)
        // console.log("no",mouse);
    }
    function handle_click() {
      const add = product.find((ele) => ele.brand === brand);
  
      if (cart) {
        const itemInCartIndex = cart.find((ele) => ele.brand === brand);
        if (itemInCartIndex) {
          
          setCart(cart.map((prev)=>{

            if(prev.brand==itemInCartIndex.brand){
              return({
                ...prev,quantity:prev.quantity+1,
                
              })
            }else{
              return(prev)
            }

          }))
        } else {

          setCart((prevCart) => [...prevCart, { ...add, quantity: 1 }]);
        }
      } 
    }

    return (

        <div className='product-detail col-3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div className='img-div'>
                <img src={(mouse)? img2 : img1}></img>
            </div>
            <div className='product-description'>
                <div className='brand-detail'>
                    <p>{brand}</p>
                </div>
                <hr />
                <p>$<span style={{ fontWeight: "bold", fontSize: "25px" }}>{price}</span></p>
            </div>
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


                {
                (size) ? 

                data.filter(ele => ele.size == size).map(ele => (<Products_List 
                setCart={setCart} cart={cart} {...ele} />))

                : 

                product.map(ele => (<Products_List {...ele} setCart={setCart} cart={cart} />))
                 
                }


            </div>
        </div>
    )
}

export default Products

 
