import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Filter from './Filter';
import Product from './Product';
import './style.css';
import { product } from './Json_data';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const DisplayProducts = () => {
  const [sizes, setSize] = useState(null);
  const [filter, setFilter] = useState([]);
  const [cartproducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    sizes
      ? setFilter(product.filter((data) => data.size === sizes))
      : setFilter(product);
  }, [sizes]);

  function iscartClick() {
    if (cartproducts.length > 0) {
      navigate('/cart', { state: cartproducts });
    }
  }

  console.log(cartproducts);

  return (

    <div className='main-div row m-0'>
      <div className='col-1'></div>
      <div className='col-9 ' style={{marginTop:"8%"}}>
        <div className='container row'>
          <div className='filter-div col-2'>
            <Filter size={setSize} />
          </div>
          <div className='product-div col-10'>
            <Product
              data={filter} setCartProducts={setCartProducts} cartproducts={cartproducts} />

          </div>
        </div>
      </div>
      <div className='col-2 text-end' >
        <button className='w-50 mt-2 fs-3 border-0' style={{backgroundColor:"white"}} onClick={iscartClick}> <FontAwesomeIcon icon={faCartShopping}/>{cartproducts.length}</button>
      </div>
    </div>




    // <div className='row w-100 m-0 p-0' style={{ gap: 0 }}>
    //   <div className='filter-div col-2 '>
    //     <Filter size={setSize} />
    //   </div>

    //   <div className='product-div col-8 m-0 p-0'>
    //     <Product data={filter} setCartProducts={setCartProducts} cartproducts={cartproducts} />
    //   </div>

    //   <div className='cart-div col-2'>
    //     <button onClick={iscartClick}>Go to Cart</button>
    //     <span>{cartproducts.length}</span>
    //   </div>
    // </div>


  );
};

export default DisplayProducts;
