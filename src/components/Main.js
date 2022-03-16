import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <>
    
     <div className="contenedor">
     <h1>Products</h1>
      <div className="container-card">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
    </>
   
  );
}
