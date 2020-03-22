import {connect} from "react-redux";
import {
    follow,
    unFollow,
    toggleIsFollowingInProgress, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
} from "../../redux/reducers/users-reducer";
import * as React from "react";
import Users from "./Users";
import Preloader from "../FormsControls/Preloader";
import {
    getCurrentPage, getFollowingIdsInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/reducers/users-selectors";
import {getUserId} from "../../redux/reducers/auth-selectors";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {
        let pageCounter = Math.ceil(this.props.totalUsersCount / this.props.pageSize );

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users pageCounter={pageCounter} currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged} users={this.props.users}
                          unFollow={this.props.unFollow} follow={this.props.follow}
                   toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                   followingIdsInProgress={this.props.followingIdsInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unFollowThunkCreator={this.props.unFollowThunkCreator} currentUserId={this.props.currentUserId}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIdsInProgress: getFollowingIdsInProgress(state),
        currentUserId: getUserId(state)
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, followThunkCreator, unFollowThunkCreator,
    toggleIsFollowingInProgress, getUsersThunkCreator,
} )(UsersApiComponent);

export default UsersContainer;