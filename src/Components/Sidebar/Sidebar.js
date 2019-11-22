import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const Sidebar = () => {
    return (
        <aside className={s.aside}>
            <nav>
                <NavLink className={s.addButton} to='/add'>Добавить</NavLink>
                <ItemListContainer/>
            </nav>
        </aside>);
};

export default Sidebar;
