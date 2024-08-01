import React from 'react'
import { products } from '../Products'
import Product from '../components/Product'




function Home() {
  return (
    <div className='container-xl mx-auto'>
      <h2>Demo Products</h2>

      <div className='products'>
        <div className='row grid_box'>
          {products.map((product) => (<Product data={product} />))}
        </div>
      </div>
    </div>
  )
}

export default Home