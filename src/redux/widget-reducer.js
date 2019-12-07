import {serverAPI} from "../api/api";
import {change as changeFormField} from 'redux-form';

const SET_CURRENT_MENU_ITEM = 'SET_CURRENT_MENU_ITEM';
const SET_BODY_PROFILE = 'SET_BODY_PROFILE';
const SET_BODY_PROFILE_INFO = 'SET_BODY_PROFILE_INFO';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CHOSE_BODY_PARAM = 'SET_CHOSE_BODY_PARAM';
const SET_TITLE = 'SET_TITLE';
const SET_SUBTITLE = 'SET_SUBTITLE';
const SAVE_BODY_PROFILE_PARAM = 'SAVE_BODY_PROFILE_PARAM';
const SET_SAVE_RESULT_CODE = 'SET_SAVE_RESULT_CODE';

let initialState = {
    title: "",
    subtitle: "",
    bodyProfile: {},
    bodyProfileInfo: [],
    choseBodyParam: null,
    isFetching: false,
    saveResultCode: 0,
    currentMenuItem: 0 // 0 - bodyProfile  |  1 - fitting  |  2 - itemInfo
};

const widgetReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_CURRENT_MENU_ITEM:
            newState.currentMenuItem = action.choseMenuItem;
            newState.choseBodyParam = null;
            break;
        case SET_BODY_PROFILE:
            newState.bodyProfile = action.bodyProfile;
            break;
        case SET_BODY_PROFILE_INFO:
            newState.bodyProfileInfo = action.bodyProfileInfo;
            break;
        case SET_IS_FETCHING:
            newState.isFetching = action.isFetchingNow;
            break;
        case SET_CHOSE_BODY_PARAM:
            newState.choseBodyParam = action.choseBodyParam;
            break;
        case SET_TITLE:
            newState.title = action.newTitle;
            break;
        case SET_SUBTITLE:
            newState.subtitle = action.newSubtitle;
            break;
        case SAVE_BODY_PROFILE_PARAM:
            newState.bodyProfile[action.paramName] = action.paramValue;
            break;
        case SET_SAVE_RESULT_CODE:
            newState.saveResultCode = action.saveResultCode;
            break;
        default:
            break;
    }
    return newState
};

// const widgetReducer = (state = initialState, action) => {
//     const getNewState = (fieldName, fieldValue) => ({...state, [fieldName]: action[fieldValue]});
//     switch (action.type) {
//         case SET_CURRENT_MENU_ITEM:
//             return getNewState("currentMenuItem", "choseMenuItem")
//                 // ...state,
//                 // currentMenuItem: action.choseMenuItem,
//                 // something: action.newSomething
//                 ;
//         case SET_BODY_PROFILE:
//             return {
//                 ...state,
//                 bodyProfile: action.bodyProfile
//             };
//         case SET_BODY_PROFILE_INFO:
//             return {
//                 ...state,
//                 bodyProfileInfo: action.bodyProfileInfo
//             };
//         case SET_IS_FETCHING:
//             return {
//                 ...state,
//                 isFetching: action.isFetchingNow
//             };
//         case SET_CHOSE_BODY_PARAM:
//             return {
//                 ...state,
//                 choseBodyParam: action.choseBodyParam
//             };
//         case SET_TITLE:
//             return {
//                 ...state,
//                 title: action.newTitle
//             };
//         case SET_SUBTITLE:
//             return {
//                 ...state,
//                 subtitle: action.newSubtitle
//             };
//         default:
//             return state;
//     }
// };

const setBodyProfile = (bodyProfile) => ({type: SET_BODY_PROFILE, bodyProfile});
const setBodyProfileInfo = (bodyProfileInfo) => ({type: SET_BODY_PROFILE_INFO, bodyProfileInfo});
const setIsFetching = (isFetchingNow) => ({type: SET_IS_FETCHING, isFetchingNow});
const saveBodyProfileParam = (paramName, paramValue) => ({type: SAVE_BODY_PROFILE_PARAM, paramName, paramValue});
const setSaveResultCode = (saveResultCode) => ({type: SET_SAVE_RESULT_CODE, saveResultCode});

export const setMenuItem = (choseMenuItem) => ({type: SET_CURRENT_MENU_ITEM, choseMenuItem});
export const setChoseBodyParam = (choseBodyParam) => ({type: SET_CHOSE_BODY_PARAM, choseBodyParam});
export const setTitle = (newTitle) => ({type: SET_TITLE, newTitle});
export const setSubtitle = (newSubtitle) => ({type: SET_SUBTITLE, newSubtitle});

export const uploadBodyProfile = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(setIsFetching(true));
        serverAPI
            .getBodyProfile(0)
            .then(bodyProfile => {
                dispatch(setBodyProfile(bodyProfile));
                serverAPI.getBodyProfileInfo().then(bodyProfileInfo => {
                        dispatch(setBodyProfileInfo(bodyProfileInfo));
                        dispatch(setIsFetching(false));
                        resolve()
                    }
                )
            })
    });
};

export const saveBodyProfile = (accountID, paramName, paramValue) => (dispatch) => {
    dispatch(setIsFetching(true));
    serverAPI
        .saveBodyProfileParam(accountID, paramName, paramValue)
        .then(saveResultCode => {
                dispatch(setSaveResultCode(saveResultCode));
                if (saveResultCode === 1) {
                    dispatch(saveBodyProfileParam(paramName, paramValue === 0 ? null : paramValue));
                    dispatch(changeFormField('bodyProfile', paramName, paramValue === 0 ? null : paramValue));
                    dispatch(setChoseBodyParam(null))
                } else {
                    setTimeout(() => dispatch(setSaveResultCode(0)), 3000)
                }
                dispatch(setIsFetching(false));
            }
        )
};

export default widgetReducer;