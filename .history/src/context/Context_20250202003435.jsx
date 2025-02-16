import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();
const FavoriteContext = createContext();

export const useCart = () => useContext(CartContext);
export const useFavorites = () => useContext(FavoriteContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Добавить товар в корзину
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Проверяем, есть ли товар в корзине
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Если товар есть, увеличиваем его количество
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Если товара нет в корзине, добавляем его
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Удалить товар из корзины
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  // Изменить количество товара в корзине
  const changeQuantity = (productId, quantity) => {
    if (quantity <= 0) return; // Предотвращаем количество меньше 1
    setCart((prevCart) => {
      return prevCart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      );
    });
  };

  // Добавить товар в избранное
  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((item) => item.id === product.id)) {
        return [...prevFavorites, product]; // Добавляем товар в избранное, если его там нет
      }
      return prevFavorites; // Товар уже в избранном, не добавляем
    });
  };

  // Удалить товар из избранного
  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>
      <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
        {children}
      </FavoriteContext.Provider>
    </CartContext.Provider>
  );
};
