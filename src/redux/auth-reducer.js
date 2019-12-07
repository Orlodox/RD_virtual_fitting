const SET_IS_AUTH = 'SET_IS_AUTH';

let initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_IS_AUTH:
            newState.isAuth = action.isAuth
            break;
        default:
            break;
    }
    return state;
};

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});

// export const createItem = (typeCode, productName, sizeList) => (dispatch) => {
//     dispatch(setIsCreating(true));
//     serverAPI
//         .createItem(typeCode, productName, sizeList)
//         .then(newItemData => {
//             //getState().editPage.values = newItemData;
//             dispatch(confirmItemCreation(newItemData.id));
//             dispatch(setIsCreating(false));
//         })
// };

export default authReducer;