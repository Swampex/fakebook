import {createSelector} from "reselect";


export const getUsers = (state) => {
    return state.usersPage.users
};

// re selectors
export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true)
};

export const getUsersSelectorSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getClusterSize = (state) => {
    return state.usersPage.clusterSize
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getFollowingIdsInProgress = (state) => {
    return state.usersPage.followingIdsInProgress
};
