import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const saveDataFromEditPage = () => {
        props.saveItem(window.store.getState().form.editPage.values);
    };

    const deleteItem = () => {
        if (window.confirm("Полностью удалить данное изделие?\nВернуть данные будет невозможно.")) {
            props.deleteItem(window.store.getState().form.editPage.values.id)
        }
    };

    const toggleExtraSettingsMode = () => props.setIsExtraSettingsMode(!props.isExtraSettingsMode);
    const toggleExtraSettingsType = () => props.setIsMarkSettingsSelected(!props.isMarkSettingsSelected);

    const showWidget = () => {
        props.setIsWidgetShown(true);
    };

    const saveButtonProps = {extraStyle: null, text: ""};
    saveButtonProps.extraStyle = props.saveResCode === -1 ? s.failedSave : props.saveResCode === 1 ? s.successfulSave : null;
    saveButtonProps.text = props.saveResCode === -1 ? 'Ошибка сохранения!' : props.saveResCode === 1 ? 'Успешно сохранено!' : 'Сохранить';

    return (
        <header className={s.header}>
            <NavLink to={'/'}>
                <button className={s.mainButton}>
                    RD FITTING ROOM ADMIN
                </button>
            </NavLink>
            {props.isSaveButtonShow &&
            <>
                <button
                    className={s.headerButton + ' ' + saveButtonProps.extraStyle}
                    onClick={saveDataFromEditPage}>{saveButtonProps.text}
                </button>
                <button
                    className={s.headerButton}
                    onClick={showWidget}>Примерить
                </button>
                <button
                    className={s.headerButton}
                    onClick={toggleExtraSettingsMode}>{props.isExtraSettingsMode ? "Основное" : "Дополнительно"}
                </button>
                {props.isExtraSettingsMode &&
                <button className={s.extraSettingsButton}
                        onClick={toggleExtraSettingsType}>
                    {props.isMarkSettingsSelected ? "Настройки параметров длины" : "Настройки параметров оценивания"}
                </button>}
                <button
                    className={s.headerButton + ' ' + s.deleteButton}
                    onClick={deleteItem}>Удалить
                </button>
            </>}
        </header>);
};

export default Header;
