import React from 'react'
import styles from './favorites.module.css'
import { InFa } from '../../components/ProductCard/ProductCard';
import { useCart } from '../../context/Context';

const Favorites = () => {
const {favorites, } = useCart()
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Sevimlilar
      </h2>
      {
        favorites.length < 1
      }
      
    </div>
  )
}

export default Favorites
