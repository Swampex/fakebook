import {authUserThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initializedSuccessfully = () => {
    return {
        type: SET_INITIALIZED
    }
};

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authUserThunkCreator());
        Promise.all([promise])
            .then(() => dispatch(initializedSuccessfully()));
    }
};

let initialState = {
    initialized: false
};

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }

};

export default appReducer;