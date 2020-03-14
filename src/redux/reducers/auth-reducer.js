import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN";

function setAuthUserData(userId, email, login) {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

function loginAC(isLoginSuccess) {
    return {
        type: LOGIN,
        isLoginSuccess: isLoginSuccess
    }
}

export const authUserThunkCreator = () => {
    return (dispatch) => {
        authApi.getAuthMe()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
};

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authApi.logout()
            .then(response => {
                dispatch(logout());
                }
            )
    }
};

export const loginThunkCreator = (login, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(login, password, rememberMe)
            .then(response => {
                dispatch(loginAC(response.status === 200));
            })
    }
};

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOGOUT: {
            return {
                state: initialState
            }
        }
        case LOGIN: {
            return {
                ...state,
                isAuth: action.isLoginSuccess
            }
        }

        default: return state
    }
};

export default authReducer;