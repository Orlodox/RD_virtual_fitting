import React from 'react';
import {connect} from "react-redux";
import EditPage from "./EditPage";
import {getItem, resetState, toggleIsSaveButtonShow} from "../../../redux/edit-page-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {reset} from "redux-form";
import s from "../Content.module.css";

class EditPageContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsSaveButtonShow(true);
        if (this.props.itemValues.id !== parseInt(this.props.match.params.itemID)) {
            this.props.getItem(this.props.match.params.itemID)
        }
    }

    componentWillUnmount() {
        this.props.toggleIsSaveButtonShow(false);
        this.props.resetState();
    }

    componentDidUpdate(prevProps, prevState) {
        if (parseInt(prevProps.match.params.itemID) !== parseInt(this.props.match.params.itemID)) {
            this.props.resetState();
            this.props.toggleIsSaveButtonShow(true);
            this.props.getItem(this.props.match.params.itemID)
        }
    }

    render() {
        this.props.reset("editPage");
        if (this.props.isFetching) {
            return <div className={s.loading}>Загрузка ...</div>;
        }
        // if (!this.props.itemValues.id && (!this.props.isFetching ||
        //     (!this.props.isSidebarFetching && this.props.actualItemList.filter(item => item.id === this.props.itemValues.id).length === 0))) {
        if (!this.props.isFetching
            && !this.props.isSidebarFetching
            && this.props.actualItemList.filter(item => item.id == this.props.match.params.itemID).length === 0) {
            return <Redirect to={'/'}/>;
        }
        return (
            <EditPage {...this.props} />)
    }
    // initialValues = {this.props.itemValues}

}

const mapStateToProps = (state) => {
    return {
        typeInfo: state.editPage.typeInfo,
        itemValues: state.editPage.values,
        isFetching: state.editPage.isFetching,
        isExtraSettingsMode: state.editPage.isExtraSettingsMode,
        isMarkSettingsSelected: state.editPage.isMarkSettingsSelected,
        actualItemList: state.sidebar.itemList,
        isSidebarFetching: state.sidebar.isSidebarFetching,
    }
};


export default compose(
    withRouter,
    connect(mapStateToProps, {getItem, reset, toggleIsSaveButtonShow, resetState})
)(EditPageContainer);