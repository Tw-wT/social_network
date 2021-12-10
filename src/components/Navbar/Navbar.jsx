import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css"
import Button from "@mui/material/Button"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}>
                <NavLink to="/profile" activeClassName="zalupa">Профиль</NavLink>
            </div>
            <div className={s.item}>               
                <NavLink to="/dialogs">Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users"> Поиск друзей </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Настройки</NavLink>
            </div>            
        </nav>
    );
}

export default Navbar;
