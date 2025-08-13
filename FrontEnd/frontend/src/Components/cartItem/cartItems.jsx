import React, { useContext } from 'react';
import { ShopContext } from '../Contex/shopcontex';
import '../cartItem/cartItems.css'; // Separate CSS for cart items

const CartItems = () => {
  const { fashionProducts, cartItems, removeFromCart, addToCart, removeItemCompletely } = useContext(ShopContext);

  // Add safety check for fashionProducts
  if (!fashionProducts) {
    return <div>Loading cart items...</div>;
  }

  // Check if cart has items
  const cartHasItems = Object.values(cartItems).some(quantity => quantity > 0);

  if (!cartHasItems) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty</p>
        <p>Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-items-container">
      <div className="cart-items-header">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Actions</p>
      </div>
      <hr />
      
      {fashionProducts.map((product) => {
        if (cartItems[product.id] > 0) {
          const itemTotal = product.price * cartItems[product.id];
          
          return (
            <div className="cart-item-row" key={product.id}>
              <div className="cart-item-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="cart-item-name">
                <p>{product.name}</p>
              </div>
              
              <div className="cart-item-price">
                <p>{product.price} LKR</p>
              </div>
              
              <div className="cart-item-quantity">
                <span>{cartItems[product.id]}</span>
              </div>
              
              <div className="cart-item-total">
                <p>{itemTotal.toFixed(2)} LKR</p>
              </div>
              
              <div className="cart-item-actions">
                <button 
                  className="quantity-btn decrease"
                  onClick={() => removeFromCart(product.id)}
                >
                  -
                </button>
                <button 
                  className="quantity-btn increase"
                  onClick={() => addToCart(product.id)}
                >
                  +
                </button>
                <button 
                  className="remove-btn"
                  onClick={() => removeItemCompletely(product.id)}
                >
                  remove
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;