import React from 'react'
import styles from './cart.module.css'
import db from '../../db/db.json';
import { useCart } from '../../context/Context';
import { useParams } from 'react-router-dom';
const Cart = () => {
  const { id } = useParams();
  const { cart, getTotalPrice, removeFromCart, updateQuantity } = useCart();
  const product = db.products.find((product) => product.id = id);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Savatda
      </h2>
      {cart.length === 0 ? (
        <section className={styles.emptyCart}>
          <img src="/shoppingCart.png" alt="" />
            <h2>Hech narsa yo’q</h2>
            <p>
              Savatga qo’shilgan mahsulotlar shu yerda paydo bo’ladi
            </p>
        </section>) : ('')
      }

    </div>
  )
}

export default Cart
