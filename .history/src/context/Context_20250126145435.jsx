import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();
const FavoriteContext = createContext();

export const useCart = () => useContext(CartContext);
export const useFavorites = () => useContext(FavoriteContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const changeQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      );
    });
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>
      <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
        {children}
      </FavoriteContext.Provider>
    </CartContext.Provider>
  );
};
