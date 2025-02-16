import React, { useState, useEffect } from 'react';
import styles from './productCard.module.css';
import { FaMinus } from "react-icons/fa6";
import { useAppContext } from '../../context/Context';

const ProductCard = ({ title, seller, salePrice, price, logo, img, id, addToCart }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useAppContext();
  
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли товар в избранных
    const productInFavorites = favorites.some((fav) => fav.id === id);
    setIsFavorite(productInFavorites);
  }, [favorites, id]);

  const handleAddToCart = () => {
    addToCart({ id, title, price, salePrice, img, logo, seller, quantity: 1 });
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(id); // Если в избранном, удаляем
    } else {
      addToFavorites({ id, title, price, salePrice, img }); // Если нет, добавляем
    }
    setIsFavorite(!isFavorite); // Переключаем состояние
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
          <button className={styles.like} onClick={handleFavoriteToggle}>
            <img src={isFavorite ? "/favorite-filled.png" : "/favorite.png"} alt="favorite" />
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

export default ProductCard;
