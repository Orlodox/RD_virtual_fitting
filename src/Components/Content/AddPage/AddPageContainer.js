import AddPage from "./AddPage";
import {connect} from "react-redux";
import {changeTypeValueAC, updateClothesNameAC, updateSizeListAC} from "../../../redux/clothesInfo-reducer";

const mapStateToProps = (state) => {
    return {
        typeValue: state.clothesInfo.typeValue,
        clothesName: state.clothesInfo.clothesName,
        sizeList: state.clothesInfo.sizeList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTypeValue: (newTypeValue) => {
            dispatch(changeTypeValueAC(newTypeValue))
        },
        updateClothesName: (newClothesName) => {
            dispatch(updateClothesNameAC(newClothesName))
        },
        updateSizeList: (newSizeList) => {
            dispatch(updateSizeListAC(newSizeList))
        },
    }
};

const AddPageContainer = connect(mapStateToProps, mapDispatchToProps)(AddPage);

export default AddPageContainer;