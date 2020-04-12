import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginThunkCreator, setCaptchaValueTC} from "../../redux/reducers/auth-reducer";


class LoginApiComponent extends React.Component {

    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        isLoginSuccess: state.auth.isLoginSuccess
    }
};

let LoginContainer = connect(mapStateToProps, {loginThunkCreator, setCaptchaValueTC})(LoginApiComponent);

export default LoginContainer;