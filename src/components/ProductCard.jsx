import React from 'react'
import './ProductCard.css'

export default function ProductCard({name, price, pic}) {
  return (
    <div className='product-box'>
        <img className='image' src={pic} alt={name} />
        <h5>{ name }      { price } บาท</h5>
    </div>
  )
}
