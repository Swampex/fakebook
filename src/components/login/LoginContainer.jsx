import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/auth-reducer";


class LoginApiComponent extends React.Component {

    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

let LoginContainer = connect(mapStateToProps, {loginThunkCreator})(LoginApiComponent);

export default LoginContainer;