import React, { useContext } from 'react'
import  { ShoppingCon } from '../Context/ShoppingContext'

function CartItem(props) {
  const {id, productName, price, productImg} = props.data
  const { cartItems, addToCart, removeFromCart } = useContext(ShoppingCon)

  return (
    <div className='productInCart col-12'>
      <img className="cartImg" src={productImg} alt="" />
      <div className='productDetails'>
        <p><strong>{productName}</strong></p>
        <p>${price}</p>
        <div className='qtn'>
          <button className='btn' onClick={() => removeFromCart(id)}>-</button>
          <input className='cartInp' value={cartItems[id]}/>
          <button className='btn' onClick={() => addToCart(id)}>+</button>
        </div>
      </div>

    </div>
  )
}

export default CartItem