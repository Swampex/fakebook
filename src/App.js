import React, {Component} from 'react';
import './App.css';

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsPageContainer from "./components/Dialogs/DialogsPageContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SignUpContainer from "./components/signUp/SignUpContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./components/FormsControls/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper__content">
                    <Route path={"/dialogs"} render={() => <DialogsPageContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/login'} component={LoginContainer}/>
                    <Route path={'/signup'} component={SignUpContainer}/>
                </div>
                <SidebarContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);
