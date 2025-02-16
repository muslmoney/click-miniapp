import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './home.module.css';
import Button from '../../components/Buttons/Buttons';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useCart } from '../../context/Context';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(''); // Замени на свой URL
        setProducts(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 210);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          <div className={styles.catalog}>
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
