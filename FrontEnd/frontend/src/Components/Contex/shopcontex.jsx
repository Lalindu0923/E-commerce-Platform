import React, { createContext, useState, useEffect } from "react";
import fashionProducts from "../../data/fashionProducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < fashionProducts.length; index++) {
        cart[fashionProducts[index].id] = 0;
    }
    console.log("Initialized default cart:", cart); // Debug log
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Debug log whenever cartItems changes
    useEffect(() => {
        console.log("Cart updated:", cartItems);
    }, [cartItems]);

    const addToCart = (itemId, quantity = 1) => {
        console.log(`Adding to cart - Product ID: ${itemId}, Quantity: ${quantity}`); // Debug log
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + quantity
        }));
    }

    const removeFromCart = (itemId) => {
        console.log(`Removing from cart - Product ID: ${itemId}`); // Debug log
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(0, (prev[itemId] || 0) - 1)
        }));
    };
    const getTotalCartAmount = () => {
        return fashionProducts.reduce((total, product) => {
            const quantity = cartItems[product.id] || 0;
            return total + (product.price * quantity);
        }, 0);
        };

    const clearCart = () => {
        console.log("Clearing cart");
        setCartItems(getDefaultCart());
    }

    const removeItemCompletely = (itemId) => {
    setCartItems(prev => {
        const updatedCart = { ...prev };
        delete updatedCart[itemId]; // remove key completely
        return updatedCart;
    });
};

    const contextValue = { fashionProducts, cartItems, addToCart, removeFromCart, getTotalCartAmount, clearCart, removeItemCompletely };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;