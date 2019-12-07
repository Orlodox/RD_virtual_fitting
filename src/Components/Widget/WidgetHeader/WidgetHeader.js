import React from 'react';
import s from './WidgetHeader.module.css'

const WidgetHeader = (props) => {

    return (
        <div className={s.header}>
            <div className={s.logo}><img className={s.logoImage}
                                         src="./../../../RDIcon.png"/>
            </div>
            <span className={s.title}>{props.title}</span>
            <span className={s.subTitle}>{props.subtitle}</span>
        </div>
    );
};

export default WidgetHeader;
