import React, { Fragment, useState, useEffect } from 'react'

import './App.css'
import Product from './Components/Product'
import Header from './Components/Header'
import Form from './Components/Form'

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
      <Header />
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
      <Form />
    </Fragment>
  )
}

export default App
