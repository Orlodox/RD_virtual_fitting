import React from 'react';
import {connect} from "react-redux";
import ItemList from "./ItemList";
import {uploadItemList} from "../../redux/sidebar-reducer";
import {compose} from "redux";
import {getItem} from "../../redux/edit-page-reducer";

class ItemListContainer extends React.Component {
    componentDidMount() {
        this.props.uploadItemList();
    }

    render() {
        return <ItemList {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return {
        itemList: state.sidebar.itemList,
        openedItemID: state.editPage.itemInfo.id
    }
};

export default compose(
    connect(mapStateToProps, {
        uploadItemList,
        getItem
    }))(ItemListContainer);