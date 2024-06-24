import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../fetcher';


const ProductDetails = () => {
  let [product, setProduct] = React.useState({errorMessage: '', data: {}})
  let {productId} = useParams();

  React.useEffect(()=>{
    const fetchData = async ()=>{
      const responseObject = await getProductsById(productId)
      setProduct(responseObject)
    }
    fetchData()
  },[productId])

  
  return (
    <>
    <div className='product-container'>
    <h2>{product.data.title}</h2>
    <div className='post-header-product-info'>
    <figure>
      <img src='https://picsum.photos/450/300' alt={product.data.title}/>
    </figure>
    <div className='product-description-container'>
      <h3>Dimensions</h3>
      {product.data.specs?.dimensions}
      <h3>Features</h3>
      <ul>{product.data.features?.map((f,i) => {
        return <li key={`feature${i}`}>{f}</li>
      })}</ul>
    </div>
    <div className='finance-btns'>
      <h3>&pound;{product.data.price}</h3>
       
      <button>
        Add to Basket
      </button>
    </div>
    </div>
    <p>{product.data?.description}</p>
    </div>
    
    </>
  )
}

export default ProductDetails