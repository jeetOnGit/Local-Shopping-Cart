import React, { useContext } from 'react'
import '../App.css'
import { ShoppingCon } from '../Context/ShoppingContext'



function Product(props) {
  const {id, productName, price, productImg} = props.data
  const {addToCart, cartItems} = useContext(ShoppingCon)
  const cartItemAmt = cartItems[id]
  return (
    <div className='productBox col-3'>
      <div className="productImg"><img src={productImg} alt="" /></div>
      <div className="details">
        <h5>{productName}</h5>
        <p>${price}</p>
        <button className='btn' onClick={() => addToCart(id)}>Add to cart { cartItemAmt > 0 && <>({cartItemAmt})</>}</button>
      </div>
    </div>
  )
}

export default Product