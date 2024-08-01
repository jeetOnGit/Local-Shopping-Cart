import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCon } from '../Context/ShoppingContext'


function Navbar() {
  

  const { totalItems } = useContext(ShoppingCon)
  // const totacar = cartItems[id]
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-xl">
          <Link className="navbar-brand fs-4 fw-semibold" to='/'>Navbar</Link>
          <div className='cartBtn position-relative'>
            <Link className='text-black text-decoration-none' to='/cart'>
            <i className="fa-solid fa-cart-shopping" />
            <p className='itemTotal position-absolute'>{totalItems}</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar