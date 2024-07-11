import React, { createContext, useContext, useEffect, useState } from 'react';
//intial context value
export const CartContext = createContext();
export const CartProvider = ({children}) => {
    //state management
    const [cartItems, setCartItems] = useState(localStorage.
        getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []);
    //to add item to cart or increase quantity
    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => 
            cartItem.name === item.name);
        if (isItemInCart) {
           setCartItems(
             cartItems.map((cartItem) =>
               cartItem.name === item.name
                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
                 : cartItem
                 )
           );
         }//if
         else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
          }
    }//add to cart

    //remove item quantity from cart
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => 
            cartItem.name === item.name);
        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => 
                cartItem.id !== item.id));
          } //if
          else {
            setCartItems(
              cartItems.map((cartItem) =>
                cartItem.name === item.name
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              )
            );
          }//else
    }

    //remove item from cart
    const removeItemFromCart = (itemname) => {
        const updatedCart = cartItems.filter((item) =>
             item.name !== itemname);
    setCartItems(updatedCart);
    }

    //side effects
    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
          setCartItems(JSON.parse(data));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('cartItems', 
        JSON.stringify(cartItems));
      }, [cartItems]); // Include cartItems as a dependency here
    

    return (
        <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

