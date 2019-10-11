const CHANGE_VALUE = 'CHANGE-VALUE';

let initialState = [
    {
        name: 'XS',
        samples: [
            {type: 'chest', value: 12},
            {type: 'waist', value: 13},
            {type: 'sleeve', value: 14},
            {type: 'bodyLength', value: 15},
            {type: 'sleeveLength', value: 16}]
    }, {
        name: 'M',
        samples: [
            {type: 'chest', value: 22},
            {type: 'waist', value: 23},
            {type: 'sleeve', value: 24},
            {type: 'bodyLength', value: 25},
            {type: 'sleeveLength', value: 26}]
    }];

const sizeTableReducer = (state = initialState, action) => {

    switch (action.type) {
        // case CHANGE_VALUE: {
        //     let ne = {
        //         id: 5,
        //         message: state.newPostText,
        //         likesCount: 0
        //     };
        //     return {
        //         ...state,
        //         posts: [...state.posts, newPost],
        //         newPostText: ''
        //     };
        // }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        // }
        default:
            return state;
    }
};

export const changeValueActionCreator = (changeInfo) =>
    ({type: CHANGE_VALUE, sizeName: changeInfo.sizeName, typeName: changeInfo.typeName, newValue: changeInfo.newValue});

export default sizeTableReducer;