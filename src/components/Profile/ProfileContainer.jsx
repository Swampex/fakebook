import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    setUserProfileThunkCreator,
    setUserStatusThunkCreator
} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.currentUserId;
        if(userId) {
            this.props.setUserProfileThunkCreator(userId);
        }
    }

    render() {
        return (
        <div>
            <Profile {...this.props} />
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        currentUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {setUserProfileThunkCreator, setUserStatusThunkCreator, addPostActionCreator}),
    //withAuthRedirect,
    withRouter
)(ProfileContainer);