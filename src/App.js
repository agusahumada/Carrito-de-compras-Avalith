import React, { Fragment, useState, useEffect } from 'react'

import './App.css'
import Product from './Components/Product'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const api = await fetch('https://fakestoreapi.com/products')
    const products = await api.json()

    setProducts(products)
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              products={products}
              setProducts={setProducts}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default App
