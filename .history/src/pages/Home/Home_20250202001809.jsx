import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './home.module.css';
import Button from '../../components/Buttons/Buttons';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useCart } from '../../context/Context';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { addToCart } = useCart();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('../../db/db.json'); // Локальный запрос к JSON
  //       setProducts(response.data.products);
  //     } catch (error) {
  //       console.error("Ошибка при загрузке товаров:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  const products 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 210);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientY);
    if (touchStart > touchEnd + 50) {
      document.querySelector(`.${styles.catalog}`).scrollBy(0, 100);
    } else if (touchStart < touchEnd - 50) {
      document.querySelector(`.${styles.catalog}`).scrollBy(0, -100);
    }
  };

  return (
    <div className={styles.home}>
      <div className='container'>
        <header className={scrolled ? `${styles.wrap} ${styles.scrolled}` : styles.wrap}>
          <div className={styles.logo}>
            <img src="/logo_bread.png" alt="logo" />
            <h1>NON BOR</h1>
          </div>
          <div className={styles.icon}>
            <img src="/communication.png" alt="" />
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.background}>
            <div className={styles.title}>
              <h2>Barcha non va non mahsulotlari mavjud</h2>
            </div>
          </div>

          <div
            className={scrolled ? `${styles.catalog} ${styles.scrolled}` : styles.catalog}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <h2 className={styles.title2}>Категории</h2>

            <div className={styles.catalogItems}>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/catalog_bread1.png" alt="" />
                </div>
                <p>5 ming-20 ming</p>
              </div>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/catalog_bread2.png" alt="" />
                </div>
                <p>10 ming-50 ming</p>
              </div>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/catalog_bread3.png" alt="" />
                </div>
                <p>6 ming-25 ming</p>
              </div>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/catalog_bread4.png" alt="" />
                </div>
                <p>3 ming-20 ming</p>
              </div>
            </div>

            <h2 className={styles.title2}>Лента</h2>
            <div className={styles.buttons}>
              <Button link={'./search'} icon={'/bakery.png'} title={'Nonvoyxonalar'} />
              <Button link={'./search'} icon={'/filter.png'} title={'Saralash'} />
            </div>

            <div className={styles.products}>
              {products.length > 0 ? (
                products.map(product => (
                  <ProductCard key={product.id} {...product} addToCart={addToCart} />
                ))
              ) : (
                <p>Загрузка товаров...</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
