import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://pluspng.com/img-png/png-lotus-flower-big-image-png-2322.png"
                alt=""
            />

            <div className={s.loginBlock}>
                {props.isAuth ? props.login:<NavLink to={"/login"}>Вход</NavLink>}                
            </div>
        </header>
    )
}

export default Header