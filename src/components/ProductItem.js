import React from 'react';


const ProductItem = ({product}) => {
  return (
    <div style={{display: 'flex'}}>
      <img src={product.thumbnail} alt={product.title} />
      <div>Name: {product.title}</div>
      {/* add product description */}
      {/* add product quantity */}
      {/* add product discount */}
      <div>Price: {product.price}</div>
      {/* add product discount to price and display new price */}
    </div>
  )
};

export default ProductItem;