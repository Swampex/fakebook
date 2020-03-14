import Header from "./Header";
import * as React from "react";
import {connect} from "react-redux";
import {authUserThunkCreator, logoutThunkCreator} from "../../redux/reducers/auth-reducer";

class HeaderApiComponent extends React.Component {

    componentDidMount() {
        this.props.authUserThunkCreator();
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId
    }
};

let HeaderContainer = connect(mapStateToProps, {authUserThunkCreator, logoutThunkCreator})(HeaderApiComponent);

export default HeaderContainer;