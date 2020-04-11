import {profileApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const TOGGLE_LIKE = 'TOGGLE-LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";
const SAVE_PROFILE = "SAVE_PROFILE";

export function addPostActionCreator(message) {
    return {
        type: ADD_POST,
        message: message
    }
}

export function deletePostActionCreator(id) {
    return {
        type: DELETE_POST,
        id: id
    }
}

export function toggleLikeActionCreator(id) {
    return {
        type: TOGGLE_LIKE,
        id: id
    }
}

export function setUserProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export function setUserStatus(status) {
    return {
        type: SET_USER_STATUS,
        status: status
    }
}

export function setUserPhoto(photoUrl) {
    return {
        type: SAVE_PHOTO,
        photoUrl: photoUrl
    }
}

export function saveProfile(status) {
    return {
        type: SAVE_PROFILE,
        status: status
    }
}

export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
    let data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const setUserStatusThunkCreator = (status) => async (dispatch) => {
    let data = await profileApi.setStatus(status);
    if (data.resultCode === 0) dispatch(setUserStatus(status));
};

export const savePhoto = (file) => async (dispatch) => {
    let data = await profileApi.savePhoto(file);
    if (data.resultCode === 0) dispatch(setUserPhoto(data.messages.filePath));
};

export const saveProfileThunkCreator = (formData) => async (dispatch, getState) => {
    dispatch(saveProfile(undefined));
    const userId = getState().auth.userId;
    let data = await profileApi.saveProfile(formData);
    if (data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId));
        dispatch(saveProfile(true));
    } else {
        dispatch(stopSubmit("profile", {_error: data.messages.error}))
        dispatch(saveProfile(false));
    }
};

let initialState = {
    posts: [
        {
            id: 1,
            text: "1 post to see, practice in properties aka props. Adding more text to see it on the form." +
                "post to see, practice in properties aka props. Adding more text to see it on the form.",
            likeCounter: 3,
            liked: true
        },
        { id: 2, text: "2 Lorem ipsum est my shagga lala boom", likeCounter: 34, liked: false }
    ],
    profile: null,
    isProfileUpdateResultSuccess: true
};

const profileReducer = (state = initialState, action) => {
    let newState = {...state};
    newState.posts = [...state.posts];
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                text: action.message,
                likeCounter: 0,
                liked: false
            };
            newState.posts.push(newPost);
            return newState;
        }
        case TOGGLE_LIKE: {
            let resultIndex = state.posts.findIndex( p => p.id === action.id);
            newState.posts[resultIndex] = {...state.posts[resultIndex]};

            newState.posts[resultIndex].liked ?
                newState.posts[resultIndex].likeCounter-- :
                newState.posts[resultIndex].likeCounter++;

            newState.posts[resultIndex].liked = !newState.posts[resultIndex].liked;
            return newState;
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    status: action.status
                }
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter( p => p.id !== action.id)
            }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    profile: {
                        photos: {photo_large: action.photoUrl}
                    }
                }
            }
        }
        case SAVE_PROFILE: {
            return {
                ...state,
                isProfileUpdateResultSuccess: action.status
            }
        }
        default: return state
    }
};

export default profileReducer;