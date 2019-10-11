import React from 'react';
import './AddPage.module.css';

const AddPage = (props) => {

    let typeSelector = React.createRef();
    let onTypeChange = () => props.changeTypeValue(typeSelector.current.value);

    let clothesNameInput = React.createRef();
    let onClothesNameChange = () => props.updateClothesName(clothesNameInput.current.value);

    let sizeListInput = React.createRef();
    let onSizeListChange = () => props.updateSizeList(sizeListInput.current.value);

    return (
        <div>
            <select value={props.typeValue} onChange={onTypeChange} ref={typeSelector}>
                <option value=''>Тип изделия</option>
                <option value='MT'>Мужская футболка</option>
            </select>
            <input type='text'
                   placeholder='Название изделия'
                   value={props.clothesName}
                   ref={clothesNameInput}
                   onChange={onClothesNameChange}/>
            <input type='text'
                   placeholder='Список размеров'
                   value={props.sizeList}
                   ref={sizeListInput}
                   onChange={onSizeListChange}/>
            <button>CREATE</button>
        </div>
    )
};

export default AddPage;
