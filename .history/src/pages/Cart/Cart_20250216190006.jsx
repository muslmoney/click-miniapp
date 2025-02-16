import React from 'react';
import { useAppContext } from '../../context/Context';
import styles from './cart.module.css';
import { InCart } from '../../components/ProductCard/ProductCard';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useAppContext();

  const totalPrice = cart.reduce((total, product) => {
    const productPrice = product.salePrice || product.price;
    return total + productPrice * product.quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>

      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <img src="/shoppingCart.png" alt="Empty Cart" />
          <h2>Hech narsa yo’q</h2>
          <p>Savatga qo’shilgan mahsulotlar shu yerda paydo bo’ladi</p>
        </div>
      ) : (
        <>
          {cart.map((product) => (
            <InCart
              key={product.id}
              img={product.img}
              price={product.price}
              salePrice={product.salePrice}
              title={product.title}
              id={product.id}
              quantity={product.quantity}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}

          <div className={styles.total}>
           <div>
           <h3>Jami summa:</h3>
            <h2>{totalPrice.toLocaleString()} UZS</h2>
        
           </div>
             </div>
        </>
      )}
    </div>
  );
};

export default Cart;
