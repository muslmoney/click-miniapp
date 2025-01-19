import React from 'react'
import styles from './ProductCard.module.css'
const ProductCard = ({title,logo, className,...props}) => {
  return (
    <div className={`${styles.button} ${className}`}>
<div>
    <img src="" alt="" />
    <div>
        <h5>
          {title}
        </h5>
    </div>
</div>
    </div>
  )
}

export default ProductCard
