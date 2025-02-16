import React from 'react'
import styles from './favorites.module.css'

const Favorites = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Sevimlilar
      </h2>
      {
        favorites.len
      }
      
    </div>
  )
}

export default Favorites
