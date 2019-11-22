import React from 'react';
import PropertiesFragment from "./fragments/PropertiesFragment";
import style from "./EditPage.module.css"
import SizesFragment from "./fragments/SizesFragment";
import ImageFragment from "./fragments/ImageFragment";

const MainSettingsPage = (props) => {

    return (
        <div className={style.mainSettingsPage}>
            <PropertiesFragment {...props}/>
            <ImageFragment {...props}/>
            <SizesFragment {...props}/>
        </div>
    )
};

export default MainSettingsPage;