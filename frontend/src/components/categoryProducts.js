import React, { useContext } from 'react'
import "./category_products.css"
import { Link, useNavigate} from "react-router-dom"
import { CartContext } from './contexts/cartContexts'

const CategoryProducts = ({id, title, features, specs,price}) => {
  console.log(id)
  const navigate = useNavigate()

const cartContext = useContext(CartContext)
const { addProduct } = cartContext

  return (
    <div className='product-container'>
    <h2><Link to={`/products/${id}`}>{title}</Link></h2>
    <div className='post-header-product-info'>
    <figure>
      <img src='https://picsum.photos/450/300' alt={title}/>
    </figure>
    <div className='product-description-container'>
      <h3>Dimensions</h3>
      {specs.dimensions}
      <h3>Features</h3>
      {/* <ul>{featureList()}</ul> */}
    </div>
    <div className='finance-btns'>
      <h3>&pound;{price}</h3>
      <button onClick={()=>{navigate(`products/${id}`)}}>
        View Product Details
      </button>
      <button onClick={()=>addProduct({id,title,price})}> 
        Add to Basket
      </button>
    </div>
    </div>
    </div>
  )
}
export default CategoryProducts