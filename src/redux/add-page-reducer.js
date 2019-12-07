import {serverAPI} from "../api/api";

const SET_TYPE_LIST = 'SET_TYPE_LIST';
const CONFIRM_ITEM_CREATION = 'CONFIRM_ITEM_CREATION';
const SET_IS_CREATING = 'SET_IS_CREATING';
const RESET_STATE = 'RESET_STATE';

let initialState = {
    typeList: {},
    isCreating: false,
    createdItemID: null
};

const addPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE_LIST:
            return {
                ...state,
                typeList: action.typeList
            };
        case  CONFIRM_ITEM_CREATION:
            return {
                ...state,
                createdItemID: action.createdItemID
            };
        case SET_IS_CREATING:
            return {
                ...state,
                isCreating: action.isCreatingNow
            };
        case RESET_STATE:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export const setTypeList = (typeList) => ({type: SET_TYPE_LIST, typeList});
export const setIsCreating = (isCreatingNow) => ({type: SET_IS_CREATING, isCreatingNow});
export const confirmItemCreation = (createdItemID) => ({type: CONFIRM_ITEM_CREATION, createdItemID});
export const resetState = () => ({type: RESET_STATE});

export const uploadTypeList = () => (dispatch) => {
    serverAPI
        .getTypeList()
        .then(data => dispatch(setTypeList(data)))
};

export const createItem = (typeCode, productName, sizeList) => (dispatch) => {
    dispatch(setIsCreating(true));
    serverAPI
        .createItem(typeCode, productName, sizeList)
        .then(newItemData => {
            //getState().editPage.values = newItemData;
            dispatch(confirmItemCreation(newItemData.id));
            dispatch(setIsCreating(false));
        })
};

export default addPageReducer;