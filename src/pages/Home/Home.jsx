import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuMessageCircleMore } from "react-icons/lu";
import styles from './home.module.css';
import Button from '../../components/Buttons/Buttons';
import db from '../../db/db.json';
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
const Home = () => {
  const products = db.products;
  const [scrolled, setScrolled] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 210) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientY);
    if (touchStart > touchEnd + 50) {
      document.querySelector(".catalog").scrollBy(0, 100); 
    } else if (touchStart < touchEnd - 50) {
      document.querySelector(".catalog").scrollBy(0, -100); 
    }
  };

  return (
    <div className={styles.home}>
      <div className='container'>
        <header className={scrolled ? `${styles.wrap} ${styles.scrolled}` : styles.wrap}>
          <div className={styles.logo}>
            <Link><img src="/loaf.png" alt="icon" /></Link>
          </div>
          <div className={styles.icon}>
            <LuMessageCircleMore />
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.background}>
            <div className={styles.title}>
              <h1 >
                Лучшие товары
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus velit ipsam minima ipsa ! m. obis ipsam odit.
              </p>
            </div>
          </div>
          <div className={scrolled ? `${styles.catalog} ${styles.scrolled}` : styles.catalog}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            <h2 className={styles.title2}>Категории</h2>

            <div className={styles.catalogItems}>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/loaf.png" alt="" />
                </div>
                <p>
                  дорого
                </p>
              </div>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/loaf.png" alt="" />
                </div>
                <p>
                  дорого
                </p>
              </div>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/loaf.png" alt="" />
                </div>
                <p>
                  дорого
                </p>
              </div>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/loaf.png" alt="" />
                </div>
                <p>
                  дорого
                </p>
              </div>
              <div>
                <div className={styles.catalogItem}>
                  <img src="/loaf.png" alt="" />
                </div>
                <p>
                  дорого
                </p>
              </div>
            </div>
            <h2 className={styles.title2}>Лента</h2>
            <div className={styles.buttons}>
              <Button link={'./search'} icon={'/price.svg'} title={'chtoto'} />
              <Button link={'./search'} icon={'/sort.svg'} title={'chtotochtotochtoto'} />
              <Button link={'./search'} icon={'shop.svg'} title={'chtoto'} />
              <Button link={'./search'} icon={'folder.svg'} title={'chtotochtotochtoto'} />
            </div>
        <div className={styles.products}>
        {products.map((product) => {
          return(
          <ProductCard   title={product.title} salePrice={product.salePrice} price={product.price}  seller={product.seller} logo={product.logo} img={product.img}  key={product.id}  />
          )
 } )}

        </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
