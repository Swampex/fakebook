import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const SET_CAPTCHA_VALUE = "SET_CAPTCHA_VALUE";

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

function loginAC(isLoginSuccess, errorMessage, id, email, login) {
    return {
        type: LOGIN,
        isLoginSuccess: isLoginSuccess,
        id: id,
        email: email,
        login: login,
        errorMessage: errorMessage
    }
}

function signupAC(isShowingSignupSuccess) {
    return {
        type: SIGNUP,
        isShowingSignupSuccess: isShowingSignupSuccess
    }
}

function setCaptchaValue(captchaValue) {
    return {
        type: SET_CAPTCHA_VALUE,
        captchaValue: captchaValue
    }
}

export const authUserThunkCreator = () => (dispatch) => {
    return authApi.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
;

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
    return (dispatch, getState) => {
        const captchaValue = getState().auth.captchaValue;
        authApi.login(login, password, rememberMe, captchaValue)
            .then(data => {
                !data.message
                    ? dispatch(loginAC(true, "",
                    data.id, data.email, data.login))
                    : dispatch(loginAC(false, data.message));
            })
    }
};

export const signupThunkCreator = (login, email, password) => {
    return (dispatch) => {
        authApi.signup(login, email, password)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(signupAC(true));
                } else {
                dispatch(stopSubmit("signUpForm", {_error: "login or email are not unique"}))
                //dispatch(stopSubmit("signUpForm", {_error: data.messages[0]}))
                //dispatch(stopSubmit("signUpForm", {login: "login not unique"}))
                }
            })
    }
};

export const setCaptchaValueTC = (captchaValue) => {
    return (dispatch) => {
        dispatch(setCaptchaValue(captchaValue));
    }
};

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    errorMessage: "",
    isShowingSignupSuccess: false,
    captchaValue: undefined
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
                isAuth: action.isLoginSuccess,
                userId: action.id,
                login: action.login,
                email: action.email,
                errorMessage: action.errorMessage
            }
        }
        case SIGNUP: {
            return {
                ...state,
                isShowingSignupSuccess: action.isShowingSignupSuccess
            }
        }
        case SET_CAPTCHA_VALUE: {
            return {
                ...state,
                captchaValue: action.captchaValue
            }
        }

        default: return state
    }
};

export default authReducer;