import React from 'react'
import { RxCross2 } from "react-icons/rx";
import style from './header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.wrap}>
                    <RxCross2 className={style.cross} />
                </div>
            </div>
        </header>
    )
}

export default Header
