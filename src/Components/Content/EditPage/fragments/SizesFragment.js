import React from 'react';
import s from './SizesFragment.module.css'
import {Field} from "redux-form";


const SizesFragment = (props) => {

    const rightOrder = ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    const sizesOrder = rightOrder.filter((sizeName) =>
            props.itemInfo.sizes[sizeName]
        //return <th key={index} width={15}>{sizeName}</th>
        // {getValues(sizeName)}

    );

    Object.keys(props.itemInfo.sizes).forEach((sizeName) => {
        if (!rightOrder.includes(sizeName)) sizesOrder.push(sizeName)
    });

    const newHeaders = sizesOrder.map((sizeName, index) =>
        <th key={index} className={s.sizeNameHeader}>{sizeName}</th>);

    const newRows = Object.keys(props.itemInfo.type.sizes).map((column, index) =>
        <tr key={index} className={s.row + ' ' + (index % 2 === 0 && s.darkRow)}>
            <th key={index} className={s.descriptionHeader}>{props.itemInfo.type.sizes[column]}</th>
            {sizesOrder.map((sizeName, index) => <td key={index} className={s.tableCell}>
                <Field component='input'
                       type='number'
                       key={index}
                       className={s.tableCellText}
                       name={`sizes.${sizeName}.${column}`}
                /></td>)}
        </tr>
    );

    // const headers = Object.keys(props.itemInfo.type.sizes).map((column, index) =>
    //     <th width={100} key={index}>{props.itemInfo.type.sizes[column]}</th>
    // );
    //
    // const getValues = (sizeName) => Object.keys(props.itemInfo.type.sizes).map((column, index) =>
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
    //     if (props.itemInfo.sizes[sizeName]) {
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
    // Object.keys(props.itemInfo.sizes).forEach((sizeName, index) => {
    //     if (!rightOrder.includes(sizeName)) rows.push(
    //         <tr key={index}>
    //             <th width={15}>{sizeName}</th>
    //             {getValues(sizeName)}
    //         </tr>
    //     )
    // });

    return (
        <div className={s.sizeFragment}>
            <table className={s.sizeTable}>
                <tbody>
                <tr>
                    <th/>
                    {newHeaders}</tr>
                {newRows}</tbody>
            </table>
        </div>
    )
};

export default SizesFragment;