import React from 'react';
import ProductCard from './productCard'; // ✅ Capitalized
import products from '../data/products'; // ✅ Make sure this file exists
import '../CSS/product.css'

const ProductDisplay = () => {
  return (
    <div className="Container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
          offer = {product.offer}
        />
      ))}
    </div>
  );
};

export default ProductDisplay;
