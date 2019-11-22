import React from 'react';
import s from './WidgetBottomMenu.module.css'

const WidgetBottomMenu = (props) => {

    const changeMenuItem = (button) => {
        props.setMenuItem(parseInt(button.currentTarget.id))
    };

    return (
        <div className={s.bottomMenu}>
            <button
                className={s.menuItem + ' ' + s.bodyProfileButton + ' ' + (props.currentMenuItem === 0 && s.menuItemChosen)}
                id={0}
                onClick={changeMenuItem}>
            </button>
            <button
                className={s.menuItem + ' ' + s.fittingButton + ' ' + (props.currentMenuItem === 1 && s.menuItemChosen)}
                id={1}
                onClick={changeMenuItem}>
            </button>
            <button
                className={s.menuItem + ' ' + s.itemInfoButton + ' ' + (props.currentMenuItem === 2 && s.menuItemChosen)}
                id={2}
                onClick={changeMenuItem}>
            </button>
        </div>
    );
};

export default WidgetBottomMenu;
