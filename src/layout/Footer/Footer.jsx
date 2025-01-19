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
            <nav className={styles.nav}>
                <li>
                    <Link to={'./home'}>
                        <CiHome className={styles.icon} />
                        <h2>Главная</h2>
                    </Link>
                </li>
                <li>
                <Link to={'./search'}>
                    <CiSearch className={styles.icon} />
                    <h2>
                        Поиск
                    </h2>

                </Link>
                </li>
                <li>
                <Link to={'./cart'}>
                    <PiBagLight className={styles.icon} />
                    <h2>
                        Корзина
                    </h2>

                </Link>
                </li>
                <li >
                <Link to={'./favorites'}>
                    <CiHeart className={styles.icon} />
                    <h2>
                        Избранные
                    </h2>

                </Link>
                </li>
                <li>
                <Link to={'./user'}>
                    <CiUser className={styles.icon} />
                    <h2>
                        Аккаунт
                    </h2>

                </Link>
                </li>
            </nav>
        </footer>
    )
}

export default Footer
