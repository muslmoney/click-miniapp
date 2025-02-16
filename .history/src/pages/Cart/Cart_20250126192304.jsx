import React, { useState, useEffect } from 'react';
import styles from './cart.module.css';
import { InCartProduct } from '../../components/ProductCard/ProductCard';
import db from '../../db/db.json';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Корзина
  const [products, setProducts] = useState([]); // Продукты

  useEffect(() => {
    setProducts(db.products); // Загружаем все продукты из db.json
  }, []);

  // Функция для добавления товара в корзину
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Функция для удаления товара из корзины
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Функция для изменения количества товара
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Запрещаем количество меньше 1
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Рассчитываем общую стоимость
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className={styles.container}>
      <h1>Корзина</h1>

      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <InCartProduct
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemoveItem(item.id)}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
            />
          ))}
        </div>
      )}

      <div className={styles.total}>
        <h2>Итоговая сумма: {totalPrice} UZS</h2>
      </div>

      <div className={styles.products}>
        <h2>Продукты</h2>
        <div className={styles.productList}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.img} alt={product.title} />
              <div>{product.title}</div>
              <div>{product.price} UZS</div>
              <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
