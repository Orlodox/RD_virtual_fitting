import React from "react";
import s from "./BodyParameter.module.css"
import {reduxForm} from "redux-form";


const BodyParameter = (props) => {

    let val = props.value;
    const changeVal = (obj) => {
        val = parseInt(obj.currentTarget.value)
    };

    return <div className={s.bodyParameter}>
        <div className={s.image}>и з о б р а ж е н и е</div>
        <div className={s.desc}>{props.description}</div>
        <div className={s.slider}>
            <input type='range'
                   min={props.minValue}
                   max={props.maxValue}
                   className={s.range} value={val}
                   onChange={changeVal}/>
        </div>
        <div>{val}</div>
        {/*<div>{props.value}</div>*/}
        {/*<div>{props.maxValue}</div>*/}
        <button onClick={() => props.saveAndGoBack()}>Сохранить</button>
    </div>
};

export default BodyParameter