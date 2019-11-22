import React, {useEffect, useState} from 'react';
import s from './MarksFragment.module.css'
import {Field, FieldArray} from "redux-form";

const Table = ({fields, columns}) => {
    const order = ['delta', 'mark', 'comment'];

    const headers = order.map((column, index) => <th key={index} className={s.headers}>{columns[column]}</th>);

    const part1 = [];
    const part2 = [];

    fields.map((point, index) => {
            const newJSXPoint = (<tr key={index} className={s.row + ' ' + ((index % 2 === 0) && s.darkRow)}>
                <td className={s.tableColumnDelta}>
                    <Field component='input' type='number'
                           className={s.tableCell + ' ' + s.tableCellDelta}
                           name={`${point}.delta`}/></td>
                <td className={s.tableColumnMark}>
                    <Field component='input' type='number'
                           className={s.tableCell + ' ' + s.tableCellMark}
                           name={`${point}.mark`}/></td>
                <td className={s.tableColumnComment}>
                    <Field component='input'
                           className={s.tableCell + ' ' + s.tableCellComment}
                           name={`${point}.comment`}/></td>
            </tr>);

            if (fields.get(index).delta < 0) part1.push(newJSXPoint);
            else part2.push(newJSXPoint);

            return null;
        }
    );

    return (
        <>
            <table className={s.marksTablePart1}>
                {headers}
                {part1}
            </table>
            <table className={s.marksTablePart2}>
                {headers}
                {part2}
            </table>
        </>
    )
};

const Tabs = ({marks, tabs, currentTab, setCurrentTab}) => {

    const initOptions = Object.keys(marks).map((param, index) =>
        <option value={param} key={index}>{tabs[param]}</option>);

    const onTabChange = (selectorInfo) => {
        setCurrentTab(selectorInfo.target.value)
    };

    return (
        <select value={currentTab} onChange={onTabChange} className={s.tabsSelector}>
            {initOptions}
        </select>)
};

const MarksFragment = (props) => {
    const [currentTab, setCurrentTab] = useState(null);

    useEffect(() => {
        if (props.typeInfo.marks.tabs)
            setCurrentTab(Object.keys(props.typeInfo.marks.tabs)[0])
    }, [props.typeInfo.marks]);

    if (currentTab)
        return (
            <div className={s.marksFragment}>
                <div className={s.title}>Настройки параметров оценивания</div>
                <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}
                      marks={props.itemValues.marks} tabs={props.typeInfo.marks.tabs}/>
                <FieldArray component={Table} name={`marks.${currentTab}`}
                            columns={props.typeInfo.marks.columns}
                            className={s.marksTable}/>
            </div>);
    return <div>Загрузка...</div>
};


export default MarksFragment;