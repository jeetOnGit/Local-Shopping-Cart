import React, { useContext, } from 'react'
import { products } from '../Products'
import  { ShoppingCon } from '../Context/ShoppingContext'
import CartItem from '../components/CartItem'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const { cartItems, getTotalAmt } = useContext(ShoppingCon)
  const totalAmt = getTotalAmt()
  const navigate = useNavigate()
  return (
    <>
    {totalAmt > 0 ? <div className='text-center'>
          <h3>Your cart items:</h3>
          <div className='productList row gap-2'>
            {products.map((Product) => {
              if(cartItems[Product.id] !== 0){
                return <CartItem data={Product}/>
              }
            })}
          </div>
          <p>Total Amount: $ {totalAmt}</p>
          <button className='btn' onClick={()=>navigate("/")}>Continue Shopping</button>
        </div>
      : <h1 className='text-center'>Your cart is empty! <br />
      <button className='btn' onClick={()=>navigate("/")}>Start Shopping</button></h1>  
      }
    </>
      
      
  )
}

export default Cart