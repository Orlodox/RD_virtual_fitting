import {applyMiddleware, combineReducers, createStore} from "redux";
import addPageReducer from './add-page-reducer'
import sidebarReducer from './sidebar-reducer'
import thunkMiddleWare from "redux-thunk";
import editPageReducer from "./edit-page-reducer";
import {reducer as formReducer} from 'redux-form'
import widgetReducer from "./widget-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    addPage: addPageReducer,
    sidebar: sidebarReducer,
    editPage: editPageReducer,
    widget: widgetReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;