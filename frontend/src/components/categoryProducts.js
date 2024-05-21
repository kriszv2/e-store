import React from 'react'
import "./category_products.css"

const CategoryProducts = ({id, title, features, specs,price}) => {
 
  const featureList = ()=>{
    let  FL = []
    
    for(let i = 0; i<features.length; i++){
      
      FL.push(<li key={i}>{features[i]}</li>)
      
    }
    return FL
  }
  return (
    <>
    <div className='product-container'>
    <h2>{title}</h2>
    <div className='post-header-product-info'>
    <figure>
      <img src='https://picsum.photos/450/300' alt={title}/>
    </figure>
    <div className='product-description-container'>
      <h3>Dimensions</h3>
      {specs.dimensions}
      <h3>Features</h3>
      <ul>{featureList()}</ul>
    </div>
    <div className='finance-btns'>
      <h3>&pound;{price}</h3>
      <button>
        View Product Details
      </button>
      <button>
        Add to Basket
      </button>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default CategoryProducts