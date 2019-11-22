import React from 'react';
import s from './SizesFragment.module.css'
import {Field} from "redux-form";


const SizesFragment = (props) => {

    const rightOrder = ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    const sizesOrder = rightOrder.filter((sizeName) =>
            props.itemValues.sizes[sizeName]
        //return <th key={index} width={15}>{sizeName}</th>
        // {getValues(sizeName)}

    );

    Object.keys(props.itemValues.sizes).forEach((sizeName) => {
        if (!rightOrder.includes(sizeName)) sizesOrder.push(sizeName)
    });

    const newHeaders = sizesOrder.map((sizeName, index) =>
        <th key={index} className={s.sizeNameHeader}>{sizeName}</th>);

    const newRows = Object.keys(props.typeInfo.sizeColumns).map((column, index) =>
        <tr className={s.row + ' ' + (index % 2 === 0 && s.darkRow)}>
            <th key={index} className={s.descriptionHeader}>{props.typeInfo.sizeColumns[column]}</th>
            {sizesOrder.map((sizeName, index) => <td className={s.tableCell}>
                <Field component='input'
                       type='number'
                       key={index}
                       className = {s.tableCellText}
                       name={`sizes.${sizeName}.${column}`}
                /></td>)}
        </tr>
    );

    // const headers = Object.keys(props.typeInfo.sizeColumns).map((column, index) =>
    //     <th width={100} key={index}>{props.typeInfo.sizeColumns[column]}</th>
    // );
    //
    // const getValues = (sizeName) => Object.keys(props.typeInfo.sizeColumns).map((column, index) =>
    //     <td className={s.tableCell}>
    //         <Field component='input'
    //                type='number'
    //                key={index}
    //                name={`sizes.${sizeName}.${column}`}
    //         />
    //     </td>
    // );
    //
    // const rows = rightOrder.map((sizeName, index) => {
    //     if (props.itemValues.sizes[sizeName]) {
    //         return (
    //             <tr key={index}>
    //                 <th width={15}>{sizeName}</th>
    //                 {getValues(sizeName)}
    //             </tr>
    //         )
    //     }
    //     return null
    // });
    //
    // Object.keys(props.itemValues.sizes).forEach((sizeName, index) => {
    //     if (!rightOrder.includes(sizeName)) rows.push(
    //         <tr key={index}>
    //             <th width={15}>{sizeName}</th>
    //             {getValues(sizeName)}
    //         </tr>
    //     )
    // });


    return (
        <form className={s.sizeFragment}>
            <table className={s.sizeTable}>
                <th></th>
                {newHeaders}
                {newRows}
            </table>
        </form>
    )
};

export default SizesFragment;