import {profileApi} from "../../api/api";

const ADD_POST = 'ADD-POST';
const TOGGLE_LIKE = 'TOGGLE-LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = "DELETE_POST";

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

export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
        let data = await profileApi.getProfile(userId);
        dispatch(setUserProfile(data));
    }
;

export const setUserStatusThunkCreator = (status) => async (dispatch) => {
    let data = await profileApi.setStatus(status);
    if (data.resultCode === 0) dispatch(setUserStatus(status));
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
        {id: 2, text: "2 Lorem ipsum est my shagga lala boom", likeCounter: 34, liked: false}
    ],
    profile: null
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
        default: return state
    }
};

export default profileReducer;