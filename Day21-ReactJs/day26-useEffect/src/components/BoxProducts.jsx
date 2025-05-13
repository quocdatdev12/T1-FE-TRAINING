import React from 'react'

export const BoxProducts = (props) => {
    console.log(props,"props");
    const { product } = props;
    
  return (
    <div className='Box_product' >
        <img src={product.thumbnail} />
        <p>Title: {product.title} </p>
        <p>Quantity: {product.quantity} </p>
        <p>Total: {product.total}</p>
    </div>
  )
}
