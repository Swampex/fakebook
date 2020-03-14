import React from "react";
import FriendsList from "./FriendsList/FriendsList";
import cssSidebar from './Sidebar.module.css';
import cssFriends from "./FriendsList/FriendsList.module.css";
import cssCommunities from "./CommunitiesList/CommunitiesList.module.css";
import CommunitiesList from "./CommunitiesList/CommunitiesList";


const Sidebar = (state) => {
    let friendsInSidebar = state.friends.slice(0, 3)
        .map(f => <FriendsList name={f.name} avatar={f.avatar} key={f.id}/>);
    let communsInSidebar = state.communs
        .map(c => <CommunitiesList name={c.name} avatar={c.avatar} key={c.id}/>);
    return (
        <div className={cssSidebar.sidebar}>
            <h5 className={cssSidebar.sidebar__header}>Friends</h5>
            <div className={cssFriends.friendsList}>
                {friendsInSidebar}
            </div>

            <h5 className={cssSidebar.sidebar__header}>Communities</h5>
            <div className={cssCommunities.communitiesList}>
                {communsInSidebar}
            </div>
        </div>
    )
};

export default Sidebar;