// Cart.jsx - Main cart page component
import React, { useContext } from 'react';
import '../CSS/pagescss/cart.css';
import { ShopContext } from '../Components/Contex/shopcontex';
import CartItems from '../Components/cartItem/cartItems'; // Import your CartItems component

const Cart = () => {
  const { getTotalCartAmount, getTotalCartItems, clearCart } = useContext(ShopContext);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>Items in cart: {getTotalCartItems ? getTotalCartItems() : 0}</p>
      </div>
      
      {/* Use the CartItems component */}
      <CartItems />
      
      {/* Cart summary and actions */}
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: {getTotalCartAmount ? getTotalCartAmount().toFixed(2) : '0.00'} LKR</h3>
        </div>

        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
          <button className="continue-shopping-btn" onClick={() => window.history.back()}>
            Continue Shopping
          </button>
        </div>
        <div className="promocode">
          <p>IF you have a Promo code, Enter it here: </p>
          <div className="codeInput">
            <input type="text" placeholder="Enter Promo Code" />
            <button className="apply-code-btn">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;