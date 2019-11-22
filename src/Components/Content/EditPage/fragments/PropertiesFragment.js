import React from 'react';
import {Field} from "redux-form";
import s from './PropertiesFragment.module.css'

const initValues = {};

const PropertiesFragment = (props) => {

    initValues.name = props.itemValues.name;
    initValues.props = {...props.itemValues.props};

    const initPropertiesSelectors = Object.keys(props.typeInfo.props).map((property, index1) => {

        const initPropertiesOptions = (property) => props.typeInfo.props[property].values.map((val, index) =>
            <option key={index} value={val}>{val}</option>);

        return (
            <div key={index1}>
                <span className={s.description}>{props.typeInfo.props[property].translate}: </span>
                <Field component='select' name={`props.${property}`} className={s.propertyValues}>
                    {initPropertiesOptions(property)}
                </Field>
            </div>)
    });

    return (
        <div className={s.propertiesFragment}>
            <div className={s.mainProps}>
                <div>
                    <div className={s.typeName}>{props.itemValues.typeName}</div>
                </div>
                <div>
                    <Field component='input'
                           name='name'
                           type="text"
                           autocomplete='off'
                           className={s.itemName}
                    />
                </div>
            </div>
            <div className={s.otherProps}>{initPropertiesSelectors}</div>
        </div>
    )
};

export default PropertiesFragment;