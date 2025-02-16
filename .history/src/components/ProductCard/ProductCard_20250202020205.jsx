import React, { useState } from 'react';
import styles from './productCard.module.css';
import { CiCircleMinus } from "react-icons/ci";
  
// Компонент для карточки товара
const ProductCard = ({ title, seller, salePrice, price, logo, img, id, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, title, price, salePrice, img, logo, seller, quantity: 1 });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.header}>
        <div className={styles.seller}>
          <img className={styles.logo} src={logo} alt={title} />
          <h5>{seller}</h5>
        </div>
        <div>
          <img src="/share.png" alt="share" />
        </div>
      </div>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        <p>{title}</p>
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
            <div>Sevimlilar</div>
          </button>
          <button className={styles.bag} onClick={handleAddToCart}>
            <span>Savatga</span>
            <img src="/addToBag.png" alt="addToBag" />
          </button>
        </div>
      </div>
    </div>
  );
};

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
        
            <span>{quantity}</span>
            <img
            src='/add.png'
              onClick={() => updateQuantity(id, quantity + 1)}
            />
                         
         
          </div>
        ) : (
          <div className={styles.quantity}>
           <img src='/remove.png' alt='remove' onClick={() => removeFromCart(id)}/>
            <span>{quantity}</span>
            <img
            src='/add.png'
              onClick={() => updateQuantity(id, quantity + 1)}
            />
           
          </div>)
      }

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
            <h2 className={styles.regularPrice}>{price} UZS</h2>
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
