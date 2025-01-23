import React from 'react'
import styles from './footer.module.css'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiBagLight } from "react-icons/pi";
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container'>
            <div className={styles.footer}>
                    <Link className={styles.a} to={'./home'}>
                        <CiHome className={styles.icon} />
                        <h2>Главная</h2>
                    </Link>
                    <Link className={styles.a} to={'./search'}>
                        <CiSearch className={styles.icon} />
                        <h2>
                            Поиск
                        </h2>

                    </Link>
                    <Link className={styles.a} to={'./cart'}>
                        <PiBagLight className={styles.icon} />
                        <h2>
                            Корзина
                        </h2>

                    </Link>
                    <Link className={styles.a} to={'./favorites'}>
                        <CiHeart className={styles.icon} />
                        <h2>
                            Избранные
                        </h2>

                    </Link>
                    <Link className={styles.a} to={'./user'}>
                        <CiUser className={styles.icon} />
                        <h2>
                            Аккаунт
                        </h2>

                    </Link>
            </div>
        </footer>
    )
}

export default Footer
