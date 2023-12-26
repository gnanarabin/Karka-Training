import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Product = ({ data, cartproducts, setCartProducts }) => {
  const [mouse, setMouse] = useState(null)

  function handleMouseEnter(brand) {
    setMouse(brand)

  }
  function handleMouseLeave() {
    setMouse(null)
  }

  function handleCart(brand) {
    const selectedProduct = data.find((product) => product.brand === brand);

    const existingProduct = cartproducts.find((ele) => ele.brand === brand);

    if (existingProduct) {
      const updatedFilterProduct = cartproducts.map((ele) =>
        ele.brand === brand ? { ...ele, quantity: ele.quantity + 1 } : ele
      );
      setCartProducts(updatedFilterProduct);
    } else {
      setCartProducts((prev) => [...prev, { ...selectedProduct, quantity: 1 }]);
    }

  }
  // console.log(cartproducts);

  return (

    <>
      <div className='product-detail row' >
        <p>16 Product(s) found</p>
        {data.map((ele) => (

          <div className='products col-3 mb-5 text-center ' onMouseEnter={()=>handleMouseEnter(ele.brand)} onMouseLeave={handleMouseLeave}>
            <div className='img-div'>
              {/* <img src={ele.img1} /> */}
              <img src={`${(mouse == ele.brand) ? ele.img2 : ele.img1}`}></img>
            </div>
            <div className='product-description'>
              <div className='brand-detail'>
                <p>{ele.brand}</p>
              </div>
              <hr />
            </div>
            <p><FontAwesomeIcon icon={faIndianRupee}/><span style={{ fontWeight: "bold", fontSize: "25px" }}>{ele.price}</span></p>
            <button className={`${(mouse == ele.brand) ? 'hoverbtn' : 'unhoverbtn'}`} onClick={() => handleCart(ele.brand)}>AddToCart</button>
          </div>
         ))} 

      </div>
    </>
  );
};

export default Product;