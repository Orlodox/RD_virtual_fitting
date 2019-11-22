const CHANGE_VALUE = 'CHANGE-VALUE';
const UPLOAD_DEFAULT = 'UPLOAD-DEFAULT';

let initialState = {
    "SIZE": {
        "chest": 0,
        "waist": 0,
        "sleeve": 0,
        "bodyLength": 0,
        "sleeveLength": 0
    },
    "MIZE": {
        "chest": 0,
        "waist": 0,
        "sleeve": 0,
        "bodyLength": 0,
        "sleeveLength": 0
    }
};

const sizeTableReducer = (state = initialState, action) => {
    // let a = Object.keys(state);
    // debugger;
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
        case UPLOAD_DEFAULT: {
            return action.defSizes;
        }
        default:
            return state;
    }
};

export const changeValueActionCreator = (changeInfo) =>
    ({type: CHANGE_VALUE, sizeName: changeInfo.sizeName, typeName: changeInfo.typeName, newValue: changeInfo.newValue});
export const uploadDefaultSizes = (defSizes) =>
    ({type: UPLOAD_DEFAULT, defSizes});

export default sizeTableReducer;