import React from 'react';
import s from './Widget.module.css'
import WidgetHeader from "./WidgetHeader/WidgetHeader";
import WidgetBottomMenu from "./WidgetBottomMenu/WidgetBottomMenu";
import WidgetContent from "./WidgetContent/WidgetContent";

const Widget = (props) => {

    return (
        <div className={s.widget}>
            <WidgetHeader {...props}/>
            <WidgetContent {...props}/>
            <WidgetBottomMenu {...props}/>
        </div>
    );
};

export default Widget;
