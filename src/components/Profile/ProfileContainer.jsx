import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    addPostActionCreator, savePhoto, saveProfileThunkCreator,
    setUserProfileThunkCreator,
    setUserStatusThunkCreator
} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.PureComponent {

    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.currentUserId;
        if(userId) {
            this.props.setUserProfileThunkCreator(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let userIdFromUrl = this.props.match.params.userId || this.props.currentUserId;
        if (this.props.profile.id != userIdFromUrl)
            this.refreshProfile()
    }

    render() {
        console.log("RENDER PROFILE CONTAINER");
        return (
        <div>
            <Profile {...this.props} userIdParam={this.props.match.params.userId}
                     isOwner={!this.props.match.params.userId}/>
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        currentUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isProfileUpdateResultSuccess: state.profilePage.isProfileUpdateResultSuccess
    }
};

export default compose(
    connect(mapStateToProps, {setUserProfileThunkCreator, setUserStatusThunkCreator,
        addPostActionCreator, savePhoto, saveProfileThunkCreator}),
    withRouter
)(ProfileContainer);