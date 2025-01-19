import React from 'react'
import styles from './productCard.module.css'
import { PiBagLight } from "react-icons/pi";

import { CiHeart } from "react-icons/ci";
const ProductCard = ({title,seller,price,logo,img,...props}) => {
  return (
    <div className={styles.productCard} >
<div className={styles. seller}>
    <img className={styles.logo} src={logo} alt={title} />
    <div>
        <h5>
          {seller}
        </h5>
    </div>
</div>
<div className={styles.img}>
  <img src={img} alt={title} />
</div>
<div className={styles.info}>
  <p>
{title}
  </p>
  <h3>
    {price} UZS
  </h3>
  <div className={styles.buttons}>
    <button className={styles.like}>
      <CiHeart/>
      <div>

      </div>
    </button>
    <button  className={styles.bag}>
      <span>
        В корзину
      </span>
    <PiBagLight />
    </button>
  </div>
</div>
    </div>
  )
}

export default ProductCard
