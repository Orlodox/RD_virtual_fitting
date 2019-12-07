import React from 'react';
import s from './AddPage.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const AddPage = (props) => {

    if (props.isCreating) return <div className={s.loading}>Создание...</div>;
    else if (props.createdItemID) {
        props.uploadItemList();
        const createdItemID = props.createdItemID;
        props.resetState();
        return <Redirect to={`item/${createdItemID}`}/>
    }

    const initTypeList = Object.keys(props.typeList).map((typeCode, index) =>
        <option value={typeCode} key={index}>{props.typeList[typeCode]}</option>);

    const AddForm = (props) => {
        return (
            <form className={s.addPage} onSubmit={props.handleSubmit}>
                <div><Field name="typeCode"
                            component="select">
                    <option value=''>Тип изделия</option>
                    {initTypeList}
                </Field></div>
                <div><Field name="name"
                            placeholder="Название изделия"
                            autoComplete='off'
                            component="input"/></div>
                <div><Field name="sizes"
                            placeholder="Размеры"
                            autoComplete='off'
                            component="input"/></div>
                <div>
                    <button>Создать</button>
                </div>
            </form>
        );
    };

    const checkAndCreate = (values) => {
        props.createItem(values.typeCode, values.name, values.sizes)
    };

    const AddReduxForm = reduxForm({form: "add"})(AddForm);
    return <AddReduxForm onSubmit={checkAndCreate}/>;
};

export default AddPage;
