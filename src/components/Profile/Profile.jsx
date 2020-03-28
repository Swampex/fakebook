import React from 'react';
import PostContainer from "./post/PostContainer";
import PostFormContainer from "./postForm/PostFormContainer";
import Preloader from "../FormsControls/Preloader";
import AvatarWithHooks from "./avatar/AvatarWithHooks";
import {Redirect} from "react-router-dom";

const Profile = ({isAuth, userIdParam, profile, addPostActionCreator, posts, setUserStatusThunkCreator}) => {

    if(!isAuth && !userIdParam) {
        return <Redirect to={"/login"}/>;
    }

    if(!profile) {
        return <Preloader/>
    }

    let onSubmitProfileMessage = (message) => {
        addPostActionCreator(message.profilePost);
    };

    let postsList = [...posts]
        .reverse()
        .map(p => <PostContainer post={p} key={p.id}/>);
    
    return (
        <div>
            <div>
                <span style={ {fontWeight: "bold"} }>
                    {`${profile.firstName || ""} ${profile.name || ""}`}
                </span>
                {profile.userLocation &&
                    <span> {` || ${profile.userLocation.town}, ${profile.userLocation.country}`} </span>}
            </div>
            <AvatarWithHooks status={profile.status}
                    ava= {profile.profile.photos && profile.profile.photos.photo_small}
                    setStatus={setUserStatusThunkCreator}/>
            { profile.profile && profile.profile.lookingForAJob ?
                <div> Looking for a job: {profile.profile.lookingForAJobDescription} </div>
                : null
            }
            <PostFormContainer onSubmit={onSubmitProfileMessage}/>
            {postsList}
        </div>)
};

export {Profile};