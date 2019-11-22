import React from 'react';
import AddPage from "./AddPage";
import {connect} from "react-redux";
import {createItem, resetState, uploadTypeList} from "../../../redux/add-page-reducer";
import {uploadItemList} from "../../../redux/sidebar-reducer";

class AddPageContainer extends React.Component {
    componentDidMount() {
        this.props.uploadTypeList();
    }

    render() {
        return <AddPage
            typeList={this.props.typeList}
            createdItemID={this.props.createdItemID}
            isCreating={this.props.isCreating}

            createItem={this.props.createItem}
            uploadItemList={this.props.uploadItemList}
            resetState={this.props.resetState}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        typeList: state.addPage.typeList,
        createdItemID: state.addPage.createdItemID,
        isCreating: state.addPage.isCreating
    }
};

export default connect(mapStateToProps, {
    uploadTypeList,
    createItem,
    uploadItemList,
    resetState
})(AddPageContainer);