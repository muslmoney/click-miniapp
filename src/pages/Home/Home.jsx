import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuMessageCircleMore } from "react-icons/lu";
import styles from './home.module.css';
import Button from '../../components/Buttons/Buttons';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      document.querySelector(".catalog").scrollBy(0, 100); // Прокрутка вверх
    } else if (touchStart < touchEnd - 50) {
      document.querySelector(".catalog").scrollBy(0, -100); // Прокрутка вниз
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
          <div className={styles.catalog}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            <h1 className={styles.title1}>Категории</h1>

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
            <h1 className={styles.title1}>Лента</h1>
            <div className={styles.buttons}>
              <Button link={'./search'} icon={'/price.svg'} title={'pornopornoporno'} />
              <Button link={'./search'} icon={'/sort.svg'} title={'pornopornoporno'} />
              <Button link={'./search'} icon={'shop.svg'} title={'porno'} />
              <Button link={'./search'} icon={'folder.svg'} title={'porno'} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
