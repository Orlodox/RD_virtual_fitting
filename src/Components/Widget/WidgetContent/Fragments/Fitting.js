import React from "react";


const Fitting = (props) => {

    props.setTitle("Виртуальная примерочная");
    props.setSubtitle(window.store.getState().editPage.values.typeName + ' > ' + window.store.getState().editPage.values.name);

    return <div>
        FITTING
    </div>
};

export default Fitting