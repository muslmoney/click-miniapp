import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const loadCartFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage('cartClick'));
  const [favorites, setFavorites] = useState(loadCartFromLocalStorage('favClick'));

  useEffect(() => {
    localStorage.setItem('cartClick', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favClick', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      return existingProduct
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) return;
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) =>
      !prevFavorites.some((item) => item.id === product.id)
        ? [...prevFavorites, product]
        : prevFavorites
    );
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
