import React from 'react'
import styles from './productCard.module.css'
import { PiBagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from 'react';


const ProductCard = ({ title, seller, salePrice, price, logo, img, ...props }) => {
  const [sale, setSale] = useState(null)
  useEffect(() => {
    if (salePrice !== null) {
      setSale(price)
    }
  }, [])

  return (
    <div className={styles.productCard} >
      <div className={styles.header}>
        <div className={styles.seller}>
          <img className={styles.logo} src={logo} alt={title} />
          <h5>
            {seller}
          </h5>
        </div>
        <div>
          <img src="/share.png" alt="share" />
        </div>
      </div>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        <p>
          {title}
        </p>
        <div className={styles.prices}>
          {salePrice ? (
            <>
              <h3 className={styles.originalPrice}>{price} </h3>
              <h3 className={styles.salePrice}>{salePrice} UZS</h3>
            </>
          ) : (
            <h3 className={styles.regularPrice}>{price} UZS</h3>
          )}
        </div>

        <div className={styles.buttons}>
          <button className={styles.like}>
            <img src="/favorite.png" alt="favorite" />
            <div>
              Sevimlilar
            </div>
          </button>
          <button className={styles.bag}>
            <span>
              Savatga
            </span>
            <img src="/addToBag.png" alt="addToBag" />
          </button>
        </div>
      </div>
    </div>
  )
}

export const SearchCard = ({ price, salePrice, title, img, ...props }) => {
  return (
    <div className={styles.searchProduct}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
          {salePrice ? (
            <div className={styles.prices}>
              <div>
                <h3>{title}</h3>
              </div>
              <div className={styles.price}>
              <h2 className={styles.originalPrice}>{price} </h2>
              <h2 className={styles.salePrice}>{salePrice} UZS</h2>
              </div>
               </div>
          ) : (
            <div>
              <h3>{title}</h3>
              <h2 className={styles.regularPrice}>{price} UZS</h2>
            </div>
          )

          }
        <div>
        <img src="/addToBag.png" alt="addToBag" />

        </div>
        </div>
    </div>
  )
}


export const InCart = ({img, price, salPrice}) => {
return(
  <div>

  </div>
)


}

export default ProductCard