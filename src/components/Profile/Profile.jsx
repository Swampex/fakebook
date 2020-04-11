import React from 'react';
import PostContainer from "./post/PostContainer";
import PostFormContainer from "./postForm/PostFormContainer";
import Preloader from "../FormsControls/Preloader";
import {Redirect} from "react-router-dom";
import ProfileInfo from "./avatar/ProfileInfo";
import ProfileHeader from "./avatar/ProfileHeader";

const Profile = ({isAuth, userIdParam, profile, addPostActionCreator, posts,
                     setUserStatusThunkCreator, isOwner, savePhoto, saveProfileThunkCreator,
                     isProfileUpdateResultSuccess}) => {

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
            <ProfileHeader setStatus={setUserStatusThunkCreator} status={profile.status} isOwner={isOwner}
                userLocation={profile.userLocation} firstName={profile.firstName} name={profile.name}/>
            <ProfileInfo ava= {profile.profile.photos && profile.profile.photos.photo_large} saveProfile={saveProfileThunkCreator}
                isOwner={isOwner} savePhoto={savePhoto} contacts={profile.profile.contacts} profile={profile}
                         isProfileUpdateResultSuccess={isProfileUpdateResultSuccess}/>
            <PostFormContainer onSubmit={onSubmitProfileMessage}/>
            {postsList}
        </div>)
};

export {Profile};