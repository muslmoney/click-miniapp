import React from 'react'
import { RxCross2 } from "react-icons/rx";
import style from './header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.header}>
                    <img className={style.cross} src="/cancel.png" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header
