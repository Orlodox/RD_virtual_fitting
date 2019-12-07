import React from 'react';
import {connect} from "react-redux";
import EditPage from "./EditPage";
import s from "../Content.module.css"
import {getItem, resetState, toggleIsSaveButtonShow} from "../../../redux/edit-page-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {reset} from "redux-form";

class EditPageContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsSaveButtonShow(true);
        if (this.props.itemInfo.id !== parseInt(this.props.match.params.itemID)) {
            this.props.getItem(this.props.match.params.itemID)
        }
        this.setState({isInitFetchingStarted: true});
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
        if (!this.state) this.state = {isInitFetchingStarted: false};
        let isItemExist;
        if (this.props.actualItemList.length !== 0 && !this.props.isSidebarFetching)
            isItemExist = this.props.actualItemList.some(item => item.id === parseInt(this.props.match.params.itemID));

        if (isItemExist === undefined || !this.state.isInitFetchingStarted || this.props.isFetching) {
            return <div className={s.loading}>Загрузка ...</div>;
        }
        if (isItemExist && !this.props.isSidebarFetching) {
            this.props.reset("editPage");
            return <EditPage {...this.props} />;
        }
        return <Redirect to={'/'}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        // typeInfo: state.editPage.typeInfo,
        itemInfo: state.editPage.itemInfo,
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