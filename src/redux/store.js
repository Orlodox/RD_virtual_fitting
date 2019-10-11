import {combineReducers, createStore} from "redux";
import clothesInfoReducer from './clothesInfo-reducer'
import sizesReducer from './sizes-reducer'

let reducers = combineReducers({
    clothesInfo: clothesInfoReducer,
    sizes: sizesReducer
});

let store = createStore(reducers);

export default store;