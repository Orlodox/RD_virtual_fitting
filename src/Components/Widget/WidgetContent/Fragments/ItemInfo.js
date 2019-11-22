import React from "react";


const ItemInfo = (props) => {

    props.setTitle("Параметры изделия");
    props.setSubtitle(window.store.getState().editPage.values.typeName + ' > ' + window.store.getState().editPage.values.name);

    return <div>
        ITEM INFO
    </div>
};

export default ItemInfo