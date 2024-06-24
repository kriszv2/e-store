import React, { useContext } from 'react'
import { CartContext } from './contexts/cartContexts'

const Basket = () => {
  const { getItems } = useContext(CartContext)
  
  const renderCart = () =>{
    const cartItems = getItems();
    console.log(cartItems.length)
    if(cartItems.length > 0){
      return(
        <div>
          {cartItems.map((p,index) =>(
            <div key={index}>{p.title}</div>
          ))}
        </div>
      )
    }
    else{
      return <div>Basket is Empty</div>
    }
  }
  return (
    <div>{renderCart()}</div>
  )
}

export default Basket