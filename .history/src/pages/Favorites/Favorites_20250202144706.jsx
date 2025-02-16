import React from 'react'
import styles from './favorites.module.css'
import { InFav } from '../../components/ProductCard/ProductCard';
import { useApp } from '../../context/Context';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useCart()
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Sevimlilar
      </h2>
      {
        favorites.length === 0 ? (
          <div className={styles.emtyFav}>
            <img src="favorites404.png" alt="404" />
            <h2>Hech narsa yo’q</h2>
            <p>Sevimliga qo’shilgan mahsulotlar shu yerda paydo bo’ladi</p>
          </div>
        ) :
          (
            <div>
              {favorites

              }
            </div>
          )
      }

    </div>
  )
}

export default Favorites
