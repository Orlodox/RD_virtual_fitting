import React from 'react';
import s from './PopupMessage.module.css'

const PopupMessage = ({message}) => {
    return (
        <div className={s.tnBox + ' ' + s.tnBoxColor1}>
            <p>{message}</p>
            <div className={s.tnProgress}/>
        </div>
    );
};

export default PopupMessage;