import React from 'react'
import styles from './search.module.css'
import { SearchCard } from '../../components/ProductCard/ProductCard.jsx'
import db from '../../db/db.json'

const Search = () => {
  const products = db.products
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
    {products.map((product) => {
      return (
        <SearchCard  title={product.title} img={product.img} salePrice={product.salePrice} price={product.price}/>
      )
    })}
      </div>





    </div>
  )
}

export default Search
