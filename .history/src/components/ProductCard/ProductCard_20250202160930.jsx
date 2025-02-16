import React, { useState, useEffect } from 'react';
import styles from './productCard.module.css';
import { FaMinus } from "react-icons/fa6";
import { useAppContext } from '../../context/Context';


const ProductCard = ({ title, seller, salePrice, price, logo, img, id, addToCart }) => {
  const { addToFavorites, removeFromFavorites, favorites, cart } = useAppContext();
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  // Проверяем, есть ли товар в избранных и в корзине при монтировании компонента
  useEffect(() => {
    const productInFavorites = favorites.some((fav) => fav.id === id);
    setIsFavorite(productInFavorites);
    
    const productInCart = cart.some((item) => item.id === id);
    setIsInCart(productInCart);
  }, [favorites, cart, id]);

  // Добавить товар в корзину
  const handleAddToCart = () => {
    addToCart({ id, title, price, salePrice, img, logo, seller, quantity: 1 });
  };

  // Переключение состояния избранного
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(id); // Если продукт в избранных, удаляем его
    } else {
      addToFavorites({ id, title, price, salePrice, img }); // Если нет, добавляем в избранные
    }
    setIsFavorite(!isFavorite); // Переключаем состояние избранного
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
          {/* Кнопка для избранных */}
          <button className={styles.like} onClick={handleFavoriteToggle}>
            <img 
              src={isFavorite ? "/favorite-filled.png" : "/favorite.png"} 
              alt="favorite" 
            />
            <div>{isFavorite ? "Sevimlilar" : "Sevimlida"}</div>
          </button>
          
          {/* Кнопка для добавления в корзину */}
          <button className={styles.bag} onClick={handleAddToCart}>
            <span>{isInCart ? "Savatda" : "Savatga"}</span>
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
