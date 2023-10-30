import React, { useEffect, useState } from 'react'


const Filter = ({size,click}) => {


    function handle_click(e){
        
        // console.log(e.target.innerText);
        size(e.target.innerText)
        click()

    }

    
  return (
    <div>
        <div className='filter-size row'>
            <p className='col-12'>Sizes :</p>
        </div>     
        <div className='filter-btn row' onClick={handle_click}>
            <div className='first-row-btn '>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>ML</button>
            </div>
            <div className='second-row-btn '>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
                
            </div>
        </div>
    </div>
  )
}

export default Filter