import React from "react";
import SignUpPage from "./SignUpPage";
import {connect} from "react-redux";
import {signupThunkCreator} from "../../redux/reducers/auth-reducer";

class SignUpContainer extends React.Component {

    render() {
        return <SignUpPage {...this.props}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        isShowingSignupSuccess: state.auth.isShowingSignupSuccess
    }
};

export default connect(mapStateToProps, {signupThunkCreator})(SignUpContainer);