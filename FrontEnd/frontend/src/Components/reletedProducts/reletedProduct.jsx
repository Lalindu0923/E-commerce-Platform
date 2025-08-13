import React from 'react';
import './reletadProducts.css';
import dataProducts from '../../data/fashionProducts';
import items from '../../data/fashionProducts';
import { Link } from 'react-router-dom';

const ReletedProduct = () => {
  const allProducts = [...dataProducts, ...items]; // Merge both arrays
  

  return (
    <>
      <div className="reletedproducts-container">
        {allProducts.map((product, i) => (
          <div className="productcard" key={i}>
            {/* Image */}
            <div className="image">
              <Link to={`/${product.routeType}/${product.id}`}><img src={product.image} alt={product.name} /></Link>
            </div>

            <h3>{product.name}</h3>

            <div className="price">
              ${product.price.toFixed(2)}
            </div>

            {product.offer && (
              <div className="offer">
                {product.offer}
              </div>
            )}

            {/* Buttons */}
            <div className="button-container">
              <button className="add">Add to Cart</button>
              <button className="order">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReletedProduct;
