import React from "react";
import s from './BodyProfile.module.css'
import BodyParameter from "./BodyParameter";


const BodyProfile = (props) => {

    props.setTitle("Мои параметры тела");
    props.setSubtitle("Виртуальная примерочная");

    const paramWasChosen = (param) => {
        props.setTitle(param.translate);
        props.setSubtitle("Мои параметры тела");
        props.setChoseBodyParam(param)
    };

    const initBodyProfileList = props.bodyProfileInfo.map((parameter, index) => {
            return (
                <div className={s.param} key={index} onClick={() => paramWasChosen(parameter)}>
                    <div className={s.paramName}>{parameter.translate}</div>
                    <ValueComponent value={props.bodyProfile[parameter.name]}/>
                    <div className={s.arrow}></div>
                </div>
            )
        }
    );
    if (props.choseBodyParam) return <BodyParameter/>
    return <div className={s.bodyProfile}>
        {initBodyProfileList}
    </div>
};

const ValueComponent = ({value}) => {

    if (value) return (
        <div className={s.paramValue}>
            <span className={s.value}>{value}</span>
            <span className={s.units}>см</span>
        </div>
    );
    else return (
        <div className={s.paramValue}>
            <span className={s.notSpecifiedValue}>указать</span>
        </div>);
};

export default BodyProfile