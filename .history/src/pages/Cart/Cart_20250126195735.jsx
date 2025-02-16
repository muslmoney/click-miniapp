import React, { useState, useEffect } from 'react';
import styles from './cart.module.css';
import { InCart } from '../../components/ProductCard/ProductCard';
import db from '../../db/db.json';

const Cart = () => {

  return (
    <div className={styles.container}>
      <h1>Корзина</h1>
    <InCart title={
    }/>
    </div>
  );
};

export default Cart;
