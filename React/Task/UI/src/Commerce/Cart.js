import React, { useEffect, useState } from 'react'
import { faCarTunnel, faCartShopping, faIndianRupee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'
const Cart = () => {
  const [cartproduct, setCartProduct] = useState([])
  const [total, setTotal] = useState()
  const location = useLocation()
  const cartData = location.state;

  console.log("cart", cartproduct);
  console.log("total", total);
  useEffect(() => {
    if (cartData) {
      setCartProduct(cartData)

    }
  }, [cartData])

  useEffect(() => {
    if (cartData) {
      const totalProduct = cartproduct.reduce((firstvalue, secondvalue) => firstvalue + secondvalue.total, 0)
      setTotal(totalProduct)
    }
  }, [cartproduct])

  function handleIncrease(brand) {
    setCartProduct((prev) => {
      return prev.map((ele) => (ele.brand == brand) ? { ...ele, quantity: ele.quantity + 1, total: ele.price * (ele.quantity + 1) } : ele)
    })
  }
  function handleDecrease(brand) {
    setCartProduct((prev) => {
      return prev.map((ele) => (ele.brand == brand) ? { ...ele, quantity: ele.quantity - 1, total: ele.price * (ele.quantity - 1) } : ele)
    })
  }
  function handleOrder() {
    alert(`\n 
    your order sucessfully \n 

    Total Price : ${total + 60}
    
    `)
  }
  return (
    <div className='w-100 container-fluid ' >
      <div className='' style={{ marginTop: "5%" }}>
        <div className='w-100 text-center fs-2 ' style={{ fontWeight: "bold" }}> <FontAwesomeIcon icon={faCartShopping} /> My Cart</div>
        <div className='row mt-5 container-fluid '>
          <div className='border  col-lg-8 col-sm-12  overflow-auto' style={{ maxHeight: "60vh", }}>
            <div className='row fs-5 border text-center bg-dark text-white ' style={{ fontWeight: "bold", position: "sticky", top: "0" }}>
              <div className='col-3'>Item</div>
              <div className='col-2'>Brand</div>
              <div className='col-2'><FontAwesomeIcon icon={faIndianRupee} /> Price</div>
              <div className='col-3'>Quantity</div>
              <div className='col-2'>Total</div>
            </div>
            {cartproduct.map((cart, index) => (
              <div style={{ backgroundColor: "#EFECEC" }}>
                <div key={index} className='row mb-3  text-center' style={{ height: "200px", }}>


                  <div className='col-3'>
                    <img src={cart.img1} style={{ width: "100%", height: "200px", objectFit: "contain" }}></img>
                  </div>
                  <div className='col-2 mt-5 ' >
                    {/* <h5>Brand</h5> */}
                    {cart.brand}
                  </div>
                  <div className='col-2 mt-5'>
                    {/* <h5> <FontAwesomeIcon icon={faIndianRupee} /> Price</h5> */}
                    {cart.price}
                  </div>
                  <div className='col-3 mt-5'>
                    {/* <h5>quantity</h5> */}
                    <div className='d-flex w-100   justify-content-center align-items-center '>
                      <button onClick={() => handleDecrease(cart.brand)} className='w-25  border-0 bg-dark text-white'> <FontAwesomeIcon icon={faMinus} /></button>
                      <h6 className='w-25 text-center  ' style={{ height: "100%", marginTop: "10px" }}>{cart.quantity}</h6>
                      <button onClick={() => handleIncrease(cart.brand)} className='w-25 border-0 bg-dark text-white'><FontAwesomeIcon icon={faPlus} /></button>
                    </div>

                  </div>
                  <div className='col-2 mt-5'>
                    {/* <h5>Total</h5> */}
                    {/* {Math.floor(cart.total} */}
                    {(cart.total)}
                  </div>


                </div>
                <hr></hr>
              </div>

            ))}

          </div>



          <div className='col-lg-4 col-sm-12' style={{ paddingLeft: "3%" }}>
            <p>ENTER PROMO CODE :</p>
            <div style={{ display: 'flex', width: '100%' }}>
              <input className='p-2' placeholder='Promo Code...'></input>
              <button className='w-25 p-2 bg-black text-white border-0'  >Submit</button>
            </div>

            <div className='row mt-4'>
              <div className='col-6'> <p>Shipping Cost</p><p>Discount</p><p>Tax</p><p style={{ fontWeight: "bold" }}>Total </p>
              </div>
              <div className='col-6 text-center'><p>40</p><p>0</p><p>20</p><p style={{ fontWeight: "bold" }}>{(total + 40 + 20)}</p></div>
            </div>


          </div>

        </div>
        <div className='row'>
          <div className='col-lg-2 col-sm-3 text-center'>
            {cartData.length}
            <span> items</span>
          </div>
          <div className='col-lg-4 col-sm-3 '>
          </div>
          <div className='col-lg-2 col-sm-3 text-center border'>
            <span>Total : <FontAwesomeIcon icon={faIndianRupee} /> {total}</span>

          </div>
          <div className='col-lg-4 col-sm-3 text-center mt-4 '>
            <button className='w-50 p-2 border-0 bg-dark text-white btn ' onClick={handleOrder}>CONFIRM ORDER</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart