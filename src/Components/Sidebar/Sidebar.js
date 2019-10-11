import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={s.aside}>
            <nav>
                <NavLink className={s.link} to='/add'>ADD</NavLink>
                <NavLink to="/item" activeClassName={s.activeLink}>Футболка 1</NavLink>
            </nav>
        </aside>);
};

export default Sidebar;
