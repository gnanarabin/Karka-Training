import React, { useEffect, useState } from 'react'


const Filter = ({size}) => {


    function handle_click(e){
        
        (e.target.innerText== 'ALL')?
        size(null)
        :
        size(e.target.innerText)

    }

    
  return (
    <div>
        <div className='filter-size row'>
            <p className='col-12'>Sizes :</p>
        </div>     
        <div className='filter-btn row' onClick={handle_click}>
            <div className='first-row-btn p-0 m-0'>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>ML</button>
            </div>
            <div className='second-row-btn p-0 m-0'>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
            </div>
            <div className='row third-row-btn p-0 m-0'>
                <button>ALL</button>
            </div>
        </div>
    </div>
  )
}

export default Filter