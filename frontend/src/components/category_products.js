import React from 'react'
import "./category_products.css"

const Category_Products = ({id, title}) => {
  return (
    <>
    <div className='product-container'>
    <h2>{title}</h2>
    <div className='post-header-product-info'>
    <figure>
      <img src='https://picsum.photos/150/100' alt={title}/>
    </figure>
    </div>
    </div>
    
    </>
  )
}

export default Category_Products