import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-xl">
          <Link className="navbar-brand fs-4 fw-semibold" to='/'>Navbar</Link>
          <div className='cartBtn'>
            <Link to='/cart'><i className="fa-solid fa-cart-shopping fs-5" /></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar