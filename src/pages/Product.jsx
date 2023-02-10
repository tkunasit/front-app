import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Product() {
  return (
    <>
        <h1>รายการสินค้า</h1>
        <ProductCard name="iPhone 13" price={ 42000 } pic="https://picsum.photos/200/250?random=1" />
        <ProductCard name="Samsung S22" price={ 35000 } pic="https://picsum.photos/200/250?random=2" />
        <ProductCard name="Xiaomi 10S" price={ 12000 } pic="https://picsum.photos/200/250?random=3" />
    </>
  )
}
