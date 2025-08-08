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
          id={product.id}
          routeType="product"
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
          offer = {product.offer}
          longDescription = {product.longDescription}
          largeimage = {product.largeimage}
          remain = {product.remain}
        />
      ))}
    </div>
  );
};

export default ProductDisplay;
