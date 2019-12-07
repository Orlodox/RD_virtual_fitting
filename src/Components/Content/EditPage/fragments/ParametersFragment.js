import React, {useEffect, useState} from 'react';
import s from './ParametersFragment.module.css'
import {Field, FieldArray} from "redux-form";

const Table = ({fields, columns}) => {

    const headers = Object.keys(columns).map((column, index) =>
        <th key={index} className={s.headers}>{columns[column]}</th>);

    const values =
        fields.map((param, index) =>
            <tr key={index} className={s.row + ' ' + (index % 2 === 0 && s.darkRow)}>
                <td className={s.tableColumnLimit}>
                    <Field component='input'
                           name={`${param}.limit`}
                           type='number'
                           className={s.tableCellLimit}
                           key={`${index}_limit`}/></td>
                <td className={s.tableColumnComment}>
                    <Field component='input'
                           name={`${param}.comment`}
                           className={s.tableCellComment}
                           key={`${index}_comment`}/></td>
            </tr>
        );

    return (
        <table className={s.paramsTable}>
            {headers}
            <tbody>
            {values}
            </tbody>
        </table>
    )
};

const Tabs = ({tabs, setCurrentTab, currentTab}) => {

    const initOptions = Object.keys(tabs).map((param, index) =>
        <option value={param} key={index}>{tabs[param]}</option>);

    const onTabChange = (selectorInfo) => {
        setCurrentTab(selectorInfo.target.value)
    };

    return (
        <select value={currentTab} onChange={onTabChange} className={s.tabsSelector}>
            {initOptions}
        </select>)
};


const ParametersFragment = (props) => {

    const [currentTab, setCurrentTab] = useState(null);

    useEffect(() => {
        if (props.itemInfo.type.params.tabs)
            setCurrentTab(Object.keys(props.itemInfo.type.params.tabs)[0])
    }, [props.itemInfo.type.params]);

    if (currentTab)
        return (
            <div className={s.parametersFragment}>
                <div className={s.title}>Настройки параметров длины</div>
                <Tabs tabs={props.itemInfo.type.params.tabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                <FieldArray component={Table} name={`params.${currentTab}`} columns={props.itemInfo.type.params.columns}/>
            </div>);
    return <div>Загрузка...</div>
};

export default ParametersFragment;