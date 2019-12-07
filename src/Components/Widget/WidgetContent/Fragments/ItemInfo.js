import React from "react";


const ItemInfo = (props) => {

    props.setTitle("Параметры изделия");
    props.setSubtitle(window.store.getState().editPage.itemInfo.type.typeName + ' > ' + window.store.getState().editPage.itemInfo.name);

    return <div>
        ITEM INFO
    </div>
};

export default ItemInfo