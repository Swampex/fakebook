import React from "react";
import cssFriends from './FriendsList.module.css';

const FriendsList = (props) => {
    return (
        <div className={cssFriends.friend}>
            <img src={props.avatar} className={cssFriends.friend__avatar} alt={"friend__avatar"}/>
            <span>{props.name}</span>
        </div>
    )
};

export default FriendsList;