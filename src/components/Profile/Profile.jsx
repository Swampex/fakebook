import React from 'react';
import PostContainer from "./post/PostContainer";
import PostFormContainer from "./postForm/PostFormContainer";
import Avatar from "./avatar/Avatar";
import Preloader from "../FormsControls/Preloader";
import {NavLink} from "react-router-dom";

const Profile = (props) => {

    // if(!props.isAuth) {
    //     return <div>
    //         <span>To view this page please </span>
    //         <NavLink to={"/login"}>log in</NavLink>
    //     </div>
    // }

    if(!props.profile) {
        return <Preloader/>
    }

    let onSubmitProfileMessage = (message) => {
        props.addPostActionCreator(message.profilePost);
    };

    let postsList = props.posts
         .map(p => <PostContainer post={p} key={p.id}/>);
    
    return (
        <div>
            <div>
                <span style={ {fontWeight: "bold"} }>
                    {`${props.profile.firstName || ""} ${props.profile.name || ""}`}
                </span>
                {props.profile.userLocation &&
                    <span> {` || ${props.profile.userLocation.town}, ${props.profile.userLocation.country}`} </span>}
            </div>
            <Avatar status={props.profile.status}
                    ava= {props.profile.profile.photos && props.profile.profile.photos.photo_small}
                    setStatus={props.setUserStatusThunkCreator}/>
            { props.profile.profile && props.profile.profile.lookingForAJob ?
                <div> Looking for a job: {props.profile.profile.lookingForAJobDescription} </div>
                : null
            }
            <PostFormContainer onSubmit={onSubmitProfileMessage}/>
            {postsList}
        </div>)
};

export {Profile};