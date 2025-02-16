import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();
const FavoriteContext = createContext();

export const useCart = () => useContext(CartContext);
export const useFavorites = () => useContext(FavoriteContext);

export const CartProvider = ({ children }) => {

  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cartClick');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage());
  const [favorites, setFavorites] = useState(loadCartFromLocalStorage());
  useEffect(() => {
    localStorage.setItem('cartClick', JSON.stringify(cart));
  }, [cart]);  useEffect(() => {
    localStorage.setItem('cartClick', JSON.stringify(cart));
  }, [cart]);
  

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) return;     setCart((prevCart) => {
      return prevCart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      );
    });
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((item) => item.id === product.id)) {
        return [...prevFavorites, product];}
      return prevFavorites;
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
        {children}
      </FavoriteContext.Provider>
    </CartContext.Provider>
  );
};