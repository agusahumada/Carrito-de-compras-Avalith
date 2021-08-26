import React from 'react'

const Product = ({ product }) => {
  const { category, description, image, title, price } = product

  return (
    <div className="col-sm-3 mb-5">
      <div className="card product-card card-body-product">
        <img alt="..." className="card-img-top" src={image} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
