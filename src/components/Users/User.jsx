import React from "react";
import css from "./users.module.css";
import {NavLink} from "react-router-dom";
import anonymous from "../../resources/anonymous.png";

let User = ({uId, photo, name, firstName, userLocation, followed, ...props}) => {
    return (
        <div key={uId} className={css.usersContainer__user}>
            <div className={css.userContainer__photo}>
                <NavLink to={"/profile/" + uId}>
                    <img src={photo ? photo : anonymous} alt=""/>
                </NavLink>
            </div>
            <div className={css.userContainer__name}>{name} {firstName} </div>
            <div className={css.userContainer__location}>
                {userLocation && `${userLocation.town}, ${userLocation.country}`}</div>
            {followed
                ? <button disabled={props.followingIdsInProgress.some(id => id === uId)}
                          onClick={() => props.unFollowThunkCreator(uId)}
                          className={css.userContainer__followBtn}>unfollow</button>

                : <button disabled={props.followingIdsInProgress.some(id => id === uId)}
                          onClick={() => props.followThunkCreator(uId)}
                          className={css.userContainer__followBtn}>follow</button>
            }
        </div>
    )
};

export default User;