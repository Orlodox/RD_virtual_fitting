import React from 'react';
import {compose} from "redux";
import Header from "./Header";
import {connect} from "react-redux";
import {deleteItem, saveItem, setIsExtraSettingsMode, setIsMarkSettingsSelected} from "../../redux/edit-page-reducer";
import {uploadItemList} from "../../redux/sidebar-reducer";

const HeaderContainer = (props) => {

    return <Header {...props}/>;
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
    connect(mapStateToProps, {saveItem, uploadItemList, setIsExtraSettingsMode, setIsMarkSettingsSelected, deleteItem})
)(HeaderContainer);
