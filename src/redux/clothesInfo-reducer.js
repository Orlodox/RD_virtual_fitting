const CHANGE_TYPE = 'CHANGE_TYPE';
const UPDATE_CLOTHES_NAME = 'UPDATE_CLOTHES_NAME';
const UPDATE_SIZE_LIST = 'UPDATE_SIZE_LIST';
const CONFIRM_INFO = 'CONFIRM_INFO';

let initialState = {
    typeValue: '',
    clothesName: '',
    sizeList: ''
};

const clothesInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TYPE:
            return {
                ...state,
                typeValue: action.newTypeValue
            };
        case UPDATE_CLOTHES_NAME:
            return {
                ...state,
                clothesName: action.newClothesName
            };
        case UPDATE_SIZE_LIST:
            return {
                ...state,
                sizeList: action.newSizeList
            };
        default:
            return state;
    }
};

export const changeTypeValueAC = (newTypeValue) => ({type: CHANGE_TYPE, newTypeValue});
export const updateClothesNameAC = (newClothesName) => ({type: UPDATE_CLOTHES_NAME, newClothesName});
export const updateSizeListAC = (newSizeList) => ({type: UPDATE_SIZE_LIST, newSizeList});

export default clothesInfoReducer;