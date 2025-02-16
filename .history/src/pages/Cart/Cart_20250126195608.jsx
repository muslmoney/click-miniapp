import React, { useState, useEffect } from 'react';
import styles from './cart.module.css';
import { InCart } from '../../components/ProductCard/ProductCard';
import db from '../../db/db.json';

const Cart = () => {

  return (
    <div className={styles.container}>
      <h1>Корзина</h1>

      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className={styles.cartItems}>
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
