import React, { useState, useEffect } from 'react';
import styles from './productCard.module.css';
import { FaMinus } from "react-icons/fa6";
import { useAppContext } from '../../context/Context';

Sevimlilar



export const InCart = ({ img, price, salePrice, title, id, quantity, updateQuantity, removeFromCart }) => {
  return (
    <div className={styles.inCart}>
      <div className={styles.info}>
        <img src={img} alt={title} />
        <div className={styles.prices}>
          <h3>{title}</h3>
          {salePrice ? (
            <div >
              <p className={styles.originalPrice}>{price} UZS</p>
              <p className={styles.salePrice}>{salePrice} UZS</p>
            </div>
          ) : (
            <p className={styles.regularPrice}>{price} UZS</p>
          )}
        </div>
      </div>
      {
        quantity > 1 ? (

          <div className={styles.quantity}>
            <FaMinus
              onClick={() => updateQuantity(id, quantity - 1)}
              disabled={quantity <= 1}
            />

            <span>{quantity}</span>
            <img
              src='/add.png'
              onClick={() => updateQuantity(id, quantity + 1)}
            />
          </div>
        ) : (
          <div className={styles.quantity}>
            <img src='/remove.png' alt='remove' onClick={() => removeFromCart(id)} />
            <span>{quantity}</span>
            <img
              src='/add.png'
              onClick={() => updateQuantity(id, quantity + 1)}
            />
          </div>
        )
      }
    </div>
  );
};

export const InFav = ({ img, price, salePrice, title, id, removeFromFavorites }) => {
  return (
    <div className={styles.inCart}>
      <div className={styles.info}>
        <img src={img} alt={title} />
        <div className={styles.prices}>
          <h3>{title}</h3>
          {salePrice ? (
            <div >
              <p className={styles.originalPrice}>{price} UZS</p>
              <p className={styles.salePrice}>{salePrice} UZS</p>
            </div>
          ) : (
            <p className={styles.regularPrice}>{price} UZS</p>
          )}
        </div>
      </div>
      <div>
        <img src="/addToBag.png" alt="tobag" />
        <img
          src="/favoriteAdded.png"
          alt="remove from favorites"
          onClick={() => removeFromFavorites(id)} 
        />
      </div>
    </div>
  );
};

export const SearchCard = ({ price, salePrice, title, img, addToCart }) => {
  return (
    <div className={styles.searchProduct}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        {salePrice ? (
          <div className={styles.prices}>
            <h3>{title}</h3>
            <div className={styles.price}>
              <h2 className={styles.originalPrice}>{price} </h2>
              <h2 className={styles.salePrice}>{salePrice} UZS</h2>
            </div>
          </div>
        ) : (
          <div>
            <h3>{title}</h3>
            <h2 className={styles}>{price} UZS</h2>
          </div>
        )}
        <div>
          <button onClick={addToCart}>
            <img src="/addToBag.png" alt="addToBag" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
