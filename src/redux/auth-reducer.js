import {serverAPI} from "../api/api";
// import Cookies from 'react-cookie';

const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_USER_ID = 'SET_USER_ID';
const SAVE_USER_DATA = 'SAVE_USER_DATA';

let initialState = {
    isAuth: null,
    userId: null
};

const authReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_IS_AUTH:
            newState.isAuth = action.isAuth;
            break;
        case SET_USER_ID:
            newState.userId = action.userId;
            break;
        default:
            break;
    }
    return newState;
};

const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
const setUserId = (userId) => ({type: SET_USER_ID, userId});

export const auth = (login, password) => (dispatch) => {
    serverAPI
        .auth(login, password)
        .then(data => {
            dispatch(setIsAuth(data.resultCode === 0));
            dispatch(setUserId(data.userId));
            if (data.resultCode === 0) {
                // const cookies = new Cookies();
                // cookies.set('userId', data.userId.toString(), {path: '/'});
            }
        })
};

export default authReducer;