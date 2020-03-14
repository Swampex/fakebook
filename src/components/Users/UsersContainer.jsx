import {connect} from "react-redux";
import {
    follow,
    unFollow,
    toggleIsFollowingInProgress, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
} from "../../redux/reducers/users-reducer";
import * as React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";

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
                   unFollowThunkCreator={this.props.unFollowThunkCreator}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIdsInProgress: state.usersPage.followingIdsInProgress
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, followThunkCreator, unFollowThunkCreator,
    toggleIsFollowingInProgress, getUsersThunkCreator,
} )(UsersApiComponent);

export default UsersContainer;