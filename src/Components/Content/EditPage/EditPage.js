import React from 'react';
import {reduxForm} from "redux-form";
import MainSettingsPage from "./MainSettingsPage";
import ExtraSettingsPage from "./ExtraSettingsPage";

const initValues = {};

const EditPage = (props) => {

        // Object.keys(props.itemValues).forEach(obj => {
        //     if (typeof props.itemValues[obj] === 'object')
        //         initValues[obj] = JSON.parse(JSON.stringify(props.itemValues[obj]));
        //     else initValues[obj] = props.itemValues[obj];
        // });
        // const tmp = initValues
        //
        // Object.keys(props.itemValues).forEach(obj => {
        //     if (typeof props.itemValues[obj] === 'object') {
        //         initValues[obj] = {};
        //         Object.assign(initValues[obj], props.itemValues[obj]);
        //     } else initValues[obj] = props.itemValues[obj];
        // });

        Object.assign(initValues, props.itemInfo);
        delete initValues.type;

        return (
            <form onSubmit={props.handleSubmit}>
                {props.isExtraSettingsMode ?
                    <ExtraSettingsPage{...props}/>
                    :
                    <MainSettingsPage {...props}/>
                }
            </form>
        )
    }
;

export default reduxForm({
    form: 'editPage',
    initialValues: initValues
})(EditPage);
