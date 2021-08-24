import React from "react";

const Product = ({ product }) => {
  const { id, category, title, price, description, image } = product;

  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
