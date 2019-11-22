import React from 'react';
import s from './WidgetContent.module.css';
import Fitting from "./Fragments/Fitting";
import ItemInfo from "./Fragments/ItemInfo";
import BodyProfileContainer from "./Fragments/BodyProfileContainer";

const WidgetContent = (props) => {

    if (props.isFetching) return <div>Загрузка</div>;
    return (
        <div className={s.content}>
            {props.currentMenuItem === 1 ? <Fitting {...props}/> : props.currentMenuItem === 0 ?
                <BodyProfileContainer {...props}/> : <ItemInfo {...props}/>}
        </div>
    );
};

export default WidgetContent;
