import {serverAPI} from "../api/api";

const SET_ITEM_LIST = 'SET_ITEM_LIST';
const SET_IS_SIDEBAR_FETCHING = 'SET_IS_SIDEBAR_FETCHING';

let initialState = {
    isSidebarFetching: true,
    itemList: []
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM_LIST:
            return {
                ...state,
                itemList: action.newItemList
            };
        case SET_IS_SIDEBAR_FETCHING:
            return {
                ...state,
                isSidebarFetching: action.isSidebarFetchingNow
            };
        default:
            return state;
    }
};

const setItemList = (newItemList) => ({type: SET_ITEM_LIST, newItemList});
const setIsSidebarFetching = (isSidebarFetchingNow) => ({type: SET_IS_SIDEBAR_FETCHING, isSidebarFetchingNow});

export const uploadItemList = () => (dispatch) => {
    dispatch(setIsSidebarFetching(true));
    serverAPI
        .getItemList()
        .then(data => {
            dispatch(setItemList(data));
            dispatch(setIsSidebarFetching(false));
        })
};

export default sidebarReducer;