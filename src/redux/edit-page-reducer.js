import {serverAPI} from "../api/api";
import {uploadItemList} from "./sidebar-reducer";

const SET_TYPE_INFO = 'SET_TYPE_INFO';
const SET_ITEM_INFO = 'SET_ITEM_INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_SAVE_BUTTON_SHOW = 'TOGGLE_IS_SAVE_BUTTON_SHOW';
const SET_SAVE_RESULT = 'SET_SAVE_RESULT';
const SET_IS_EXTRA_SETTINGS_MODE = 'SET_IS_EXTRA_SETTINGS_MODE';
const SET_IS_MARK_SETTINGS_SELECTED = 'SET_IS_MARK_SETTINGS_SELECTED';
const RESET_STATE = 'RESET_STATE';


let initialState = {
    isExtraSettingsMode: false,
    isMarkSettingsSelected: true,
    saveResCode: 0, // error: -1 , notSaved: 0 , success: 1
    isSaveButtonShow: false,
    isFetching: false,
    isSaving: false,
    // typeInfo: {
    //     typeCode: '',
    //     typeName: '',
    //     props: {},
    //     sizeColumns: {},
    //     marks: {},
    //     params: {}
    // },
    itemInfo: {
        id: null,
        type: {},
        name: '',
        props: {},
        sizes: {},
        marks: {},
        params: {}
    }
};

const editPageReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_TYPE_INFO:
        //     return {
        //         ...state,
        //         typeInfo: action.typeInfo
        //     };
        case SET_ITEM_INFO:
            return {
                ...state,
                itemInfo: action.itemInfo
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetchingNow
            };
        case TOGGLE_IS_SAVE_BUTTON_SHOW:
            return {
                ...state,
                isSaveButtonShow: action.isSaveButtonShowNow,
                saveResCode: 0
            };
        case SET_SAVE_RESULT:
            return {
                ...state,
                itemInfo: {...action.updatedItem, type: state.itemInfo.type},
                saveResCode: action.saveResCode
            };
        case SET_IS_EXTRA_SETTINGS_MODE:
            return {
                ...state,
                isExtraSettingsMode: action.isExtraSettingsModeNow
            };
        case SET_IS_MARK_SETTINGS_SELECTED:
            return {
                ...state,
                isMarkSettingsSelected: action.isMarkSettingsSelectedNow
            };
        case RESET_STATE:
            return {
                ...initialState
            };
        default:
            return state;
    }
};


// const setTypeInfo = (typeInfo) => ({type: SET_TYPE_INFO, typeInfo});
const setItemInfo = (itemInfo) => ({type: SET_ITEM_INFO, itemInfo});
const setIsItemFetching = (isFetchingNow) => ({type: TOGGLE_IS_FETCHING, isFetchingNow});
const setSaveResult = (saveResCode, updatedItem) => ({type: SET_SAVE_RESULT, saveResCode, updatedItem});
export const resetState = () => ({type: RESET_STATE});

export const setIsExtraSettingsMode = (isExtraSettingsModeNow) => ({
    type: SET_IS_EXTRA_SETTINGS_MODE,
    isExtraSettingsModeNow
});

export const setIsMarkSettingsSelected = (isMarkSettingsSelectedNow) => ({
    type: SET_IS_MARK_SETTINGS_SELECTED,
    isMarkSettingsSelectedNow
});

export const toggleIsSaveButtonShow = (isSaveButtonShowNow) => ({
    type: TOGGLE_IS_SAVE_BUTTON_SHOW,
    isSaveButtonShowNow
});

export const getItem = (itemID) => (dispatch) => {
    dispatch(setIsItemFetching(true));
    serverAPI
        .getItem(itemID)
        .then(data => {
            if (data) dispatch(setItemInfo(data));
            dispatch(setIsItemFetching(false))
        })
        .catch(e => {
            dispatch(setIsItemFetching(false))
        });
};

export const saveItem = (updatedItem) => (dispatch) => {
    serverAPI.saveItem(updatedItem)
        .then(resCode => {
            dispatch(uploadItemList());
            dispatch(setSaveResult(resCode, updatedItem));
            setTimeout(() => dispatch(toggleIsSaveButtonShow(true)), 2000)
        })
        .catch(resCode => dispatch(setSaveResult(resCode, updatedItem)));

};

export const deleteItem = (deletedItemID) => (dispatch) => {
    dispatch(setIsItemFetching(true));
    serverAPI.deleteItem(deletedItemID)
        .then(res => {
            dispatch(uploadItemList());
            dispatch(resetState());
            dispatch(setIsItemFetching(false));
        })
};

// const getTypeInfo = (typeCode) => (dispatch) => {
//     serverAPI
//         .getTypeInfo(typeCode)
//         .then(data => {
//             dispatch(setTypeInfo(data));
//             dispatch(setIsItemFetching(false))
//         })
// };


export default editPageReducer;