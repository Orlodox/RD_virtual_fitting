import React from 'react';
import {compose} from "redux";
import Login from "./Login";
import {connect} from "react-redux";
import {deleteItem, saveItem, setIsExtraSettingsMode, setIsMarkSettingsSelected} from "../../redux/edit-page-reducer";

const HeaderContainer = (props) => {

    return <Login {...props}/>;
};

const mapStateToProps = (state) => {
    return {
        isSaveButtonShow: state.editPage.isSaveButtonShow,
        saveResCode: state.editPage.saveResCode,
        isExtraSettingsMode: state.editPage.isExtraSettingsMode,
        isMarkSettingsSelected: state.editPage.isMarkSettingsSelected
    }
};

export default compose(
    connect(mapStateToProps, {saveItem, setIsExtraSettingsMode, setIsMarkSettingsSelected, deleteItem})
)(HeaderContainer);
