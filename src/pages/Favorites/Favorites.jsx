import React from 'react'
import styles from './favorites.module.css'
import db from '../../db/db.json';
import { useCart } from '../../context/Context';
import { useParams } from 'react-router-dom';

const Favorites = () => {
  const { id } = useParams();
  const { favorites, removeFromFavorites } = useCart();
  const product = db.products.find((product) => product.id = id);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Sevimlilar
      </h2>
      {favorites.length === 0 ? (
        <section className={styles.emptyFavorites}>
          <img src="/favorites404.png" alt="" />
            <h2>Hech narsa yo’q</h2>
            <p>
              Sevimli mahsulotlar ro’yxatiga qo’shilgan mahsulotlar shu yerda paydo bo’ladi
            </p>
        </section>) : ('')

      }
    </div>
  )
}

export default Favorites
