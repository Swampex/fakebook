import {userApi} from "../../api/api";
import {createMappedObj} from "../../utils/object-helpers";

export const follow = (userId) => ({ type: FOLLOW, userId: userId }) ;
export const unFollow = (userId) => ({ type: UNFOLLOW, userId: userId }) ;
export const setUsers = (users) => ({ type: SET_USERS, users: users});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page});
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: count});
export const toggleFetchState = () => ({ type: TOGGLE_FETCH_STATE});
export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => (
    { type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollowingInProgress, userId });

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetchState());
    dispatch(setCurrentPage(currentPage));

    let data = await userApi.getUsers(currentPage, pageSize);
    dispatch(toggleFetchState());
    dispatch(setUsers(data.users));
    dispatch(setTotalUsersCount(data.totalUsersCount));
};

export const unFollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, id));
        userApi.unFollow(id)
            .then(data => {
                if(data.resultCode === 0) dispatch(unFollow(id));
                dispatch(toggleIsFollowingInProgress(false, id));
            });
    }
};

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, id));
        userApi.follow(id)
            .then(data => {
                if(data.resultCode === 0) dispatch(follow(id));
                dispatch(toggleIsFollowingInProgress(false, id));
            });
    }
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCH_STATE = 'TOGGLE_FETCH_STATE';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIdsInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
            ...state,
            users: createMappedObj(state.users, `id`, action.userId, {followed: true})
            }
        }

        case UNFOLLOW: {
            return {
            ...state,
            users: createMappedObj(state.users, `id`, action.userId, {followed: false})
            }
        }

        case SET_USERS: {
            return {
            ...state,
                    users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
            ...state,
            users: [...state.users],
            currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
            ...state,
            totalUsersCount: action.totalUsersCount
            }
        }

        case TOGGLE_FETCH_STATE: {
            return {
            ...state,
            isFetching: !state.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return  {
            ...state,
            followingIdsInProgress: action.isFollowingInProgress
                    ? [...state.followingIdsInProgress, action.userId]
                    : state.followingIdsInProgress.filter( id => id !== action.userId)
            }
        }

        default: return state
    }
};

export default usersReducer;
