import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Try to load from local storage
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Failed to load cart from local storage", error);
            return [];
        }
    });

    useEffect(() => {
        // Save to local storage whenever cart changes
        try {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Failed to save cart to local storage", error);
        }
    }, [cartItems]);

    const addToCart = (product) => {
        // Check if item already exists to avoid duplicates if that's the logic, or allow multiples.
        // For digital products, usually you only buy one copy.
        if (!cartItems.find(item => item.id === product.id)) {
            setCartItems([...cartItems, product]);
            return true; // Added
        }
        return false; // Already in cart
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            // Price is string like "$199" or "$1,299", need to parse
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
            return total + (isNaN(price) ? 0 : price);
        }, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
