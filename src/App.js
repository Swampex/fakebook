import React from 'react';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar";
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

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper__content">
                <Route path={"/dialogs"} render={() => <DialogsPageContainer />}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
                <Route path={'/users'} render={() => <UsersContainer />} />
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/login'} component={LoginContainer}/>
            </div>
            <SidebarContainer />
        </div>
    )
};

export default App;
