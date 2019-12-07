import React from "react";
import s from "./BodyParameter.module.css"
import {Field} from "redux-form";


const BodyParameter = (props) => {

    const changeStep = 0.5;
    let isDoubleClicked = false;

    const formatValue = (value) => (Number.isInteger(parseFloat(value))) ? value + ".0" : value;

    const saveBodyProfileParam = () => {
        if (!isDoubleClicked)
            props.saveBodyProfile(props.account_id, props.name, props.value)
    };

    const clearBodyProfileParam = () => {
        isDoubleClicked = true;
        props.saveBodyProfile(props.account_id, props.name, 0)
    };

    return <div className={s.bodyParameter}>
        <div className={s.image}>и з о б р а ж е н и е</div>
        <div className={s.descPlace}><p className={s.desc}>{props.description}</p></div>
        <div className={s.value}>
            <img onClick={() => (props.value > props.minValue && props.changeValueByStep(props.name, -changeStep))}
                 className={s.changeForOneStepButton + ' ' + s.decrementButton}/>
            <span>{(props.value) ? formatValue(props.value) : '↓'}</span>
            <div onClick={() => (props.value < props.maxValue && props.changeValueByStep(props.name, changeStep))}
                 className={s.changeForOneStepButton + ' ' + s.incrementButton}/>
        </div>
        <div className={s.editorPlace}>
            <Field
                name={props.name}
                component='input'
                type='range'
                min={props.minValue}
                max={props.maxValue}
                step={changeStep}
                className={s.inputRange}
            />
        </div>
        <div className={s.range}>
            <span className={s.rangeMin}>{props.minValue}</span><span className={s.rangeMax}>{props.maxValue}</span>
        </div>
        <div className={s.saveButton}>
            <button onClick={saveBodyProfileParam}//{() => setTimeout(saveBodyProfileParam, 250)}
                    onDoubleClick={clearBodyProfileParam}>
                {(props.saveResCode === -1) ? 'Ошибка!' : 'Сохранить'}</button>
        </div>

    </div>
};

export default BodyParameter