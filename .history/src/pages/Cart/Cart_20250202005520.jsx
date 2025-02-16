import React from 'react';
import { useCart } from '../../context/Context';
import styles from './cart.module.css';
import { InCart } from '../../components/ProductCard/ProductCard';

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>

      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <div className={}>
            <img src="/shoppingCart.png" alt="" />
            <h2>
              Hech narsa yo’q
            </h2>
            <p>
              Savatga qo’shilgan mahsulotlar shu yerda paydo bo’ladi
            </p>
          </div>
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
