import {serverAPI} from "../api/api";
import {uploadItemList} from "./sidebar-reducer";

const SET_TYPE_INFO = 'SET_TYPE_INFO';
const SET_ITEM_VALUES = 'SET_ITEM_VALUES';
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
    typeInfo: {
        typeCode: '',
        typeName: '',
        props: {},
        sizeColumns: {},
        marks: {},
        params: {}
    },
    values: {
        id: null,
        typeCode: '',
        typeName: '',
        name: '',
        props: {},
        sizes: {},
        marks: {},
        params: {}
    }
};

const editPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE_INFO:
            return {
                ...state,
                typeInfo: action.typeInfo
            };
        case SET_ITEM_VALUES:
            return {
                ...state,
                values: action.values
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
                values: {...action.updatedItem},
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


const setTypeInfo = (typeInfo) => ({type: SET_TYPE_INFO, typeInfo});
const setItemValues = (values) => ({type: SET_ITEM_VALUES, values});
const setIsFetching = (isFetchingNow) => ({type: TOGGLE_IS_FETCHING, isFetchingNow});
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
    dispatch(setIsFetching(true));
    serverAPI
        .getItem(itemID)
        .then(data => {
            if (data) dispatch(setItemValues(data));
            dispatch(getTypeInfo(data.typeCode));
        })
        .catch(e => {
            dispatch(setIsFetching(false))
        });
};

export const saveItem = (updatedItem) => (dispatch) => {
    serverAPI.saveItem(updatedItem)
        .then(resCode => {
            dispatch(setSaveResult(resCode, updatedItem));
            dispatch(uploadItemList());
            setTimeout(() => dispatch(toggleIsSaveButtonShow(true)), 3000)
        })
        .catch(resCode => dispatch(setSaveResult(resCode, updatedItem)));

};

export const deleteItem = (deletedItemID) => (dispatch) => {
    serverAPI.deleteItem(deletedItemID)
        .then(res => {
            dispatch(resetState());
            dispatch(uploadItemList());
        })
};

const getTypeInfo = (typeCode) => (dispatch) => {
    serverAPI
        .getTypeInfo(typeCode)
        .then(data => {
            dispatch(setTypeInfo(data));
            dispatch(setIsFetching(false))
        })
};


export default editPageReducer;