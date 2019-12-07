import React from "react";
import {NavLink} from "react-router-dom";
import s from './Sidebar.module.css'


const ItemList = (props) => {
    const initItemList = props.itemList.map((item, index) =>
        <NavLink className={s.itemName} to={`/item/${item.id}`}
                 key={index}>
            <div className={s.item + ' ' + (props.openedItemID === item.id && s.itemChose)}>
                <div className={s.itemName}>{item.name}</div>
                <div className={s.typeName}>{item.typeName}</div>
            </div>
        </NavLink>
    );

    return <div>
        {initItemList}
    </div>
};
export default ItemList