import React from 'react';
import { useCart } from '../../context/Context'; // Ваш контекст корзины
import styles from './cart.module.css';
import { InCart } from '../../components/ProductCard/ProductCard';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart(); // Добавляем функции для обновления количества и удаления товара

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>

      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <div className={styles.emptyCart}>
            <img src="/shoppingCart.png" alt="Empty Cart" />
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
              quantity={product.quantity} // Передаем количество товара
              updateQuantity={updateQuantity} // Функция для обновления количества
              removeFromCart={removeFromCart} // Функция для удаления товара
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
