import React from "react";


const Fitting = (props) => {

    props.setTitle("Виртуальная примерочная");
    props.setSubtitle(window.store.getState().editPage.itemInfo.type.typeName + ' > ' + window.store.getState().editPage.itemInfo.name);

    return <div>
        FITTING
    </div>
};

export default Fitting