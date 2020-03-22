import Header from "./Header";
import * as React from "react";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../redux/reducers/auth-reducer";
import {setUserProfileThunkCreator} from "../../redux/reducers/profile-reducer";

class HeaderApiComponent extends React.Component {

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

let HeaderContainer = connect(mapStateToProps,
    {logoutThunkCreator, setUserProfileThunkCreator})(HeaderApiComponent);

export default HeaderContainer;