import React from 'react';

const SizeTable = (props) => {

    // let onSizeValueChange = (sizeName, typeName, newValue) => {
    //     debugger;
    //     props.updateSizeList(sizeName, typeName, newValue)
    // };

    let currentCell = React.createRef();
    let defSizes = Object.keys(props.defSizes).map((sizeName, index1) =>
        <tr key={index1}>
            <th align={"right"}>{sizeName}</th>
            {Object.keys(props.defSizes[sizeName]).map((typeName, index2) =>
                <td align={"center"} contentEditable={true}
                    ref={currentCell}
                    // onKeyPress={() => {
                    //     debugger;
                    //     onSizeValueChange(sizeName, typeName, this.value)
                    // }}
                    key={index2}>{props.defSizes[sizeName][typeName]}</td>)}
        </tr>);


    return (
        <table valign="middle">
            {/*<th>*/}
            {/*    <button onClick={() => props.getDefaultSizes()}>GET</button>*/}
            {/*</th>*/}
            <th></th>
            <th width={60}>Обхват груди</th>
            <th width={60}>Обхват талии</th>
            <th width={60}>Обхват рукава</th>
            <th width={60}>Общая длина</th>
            <th width={60}>Длина рукава</th>
            <tbody>
            {defSizes}
            {/*<td contentEditable={true}>{defaultSizes[0].second.waist}</td>*/}
            {/*<td contentEditable={true}>{defaultSizes[0].second.sleeve}</td>*/}
            {/*<td contentEditable={true}>{defaultSizes[0].second.bodyLength}</td>*/}
            {/*<td contentEditable={true}>{defaultSizes[0].second.sleeveLength}</td>*/}
            </tbody>
        </table>

    )
};

export default SizeTable;