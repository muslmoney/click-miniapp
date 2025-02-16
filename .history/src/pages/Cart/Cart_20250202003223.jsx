import React from 'react';
import { useCart } from '../../context/Context'; 
import styles from './cart.module.css';
import { InCart } from '../../components/ProductCard/ProductCard';

const Cart = () => {
  const { cart } = useCart(); 
  return (
    <div className={styles.container}>
      <h1>Корзина</h1>

      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          cart.map((product) => (
            <InCart
              key={product.id}
              img={product.img}
              price={product.price}
              salePrice={product.salePrice}
              title={product.title}
              id={product.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
