import React from 'react';
import PostContainer from "./post/PostContainer";
import PostFormContainer from "./postForm/PostFormContainer";
import Avatar from "./avatar/Avatar";
import Preloader from "../FormsControls/Preloader";
import {addPostActionCreator, setUserStatusThunkCreator} from "../../redux/reducers/profile-reducer";

const Profile = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    let onSubmitProfileMessage = (message) => {
        props.addPostActionCreator(message.profilePost);
    };

    let postsList = props.posts
         .map(p => <PostContainer post={p}/>);
    
    return (
        <div>
            <div>
                <span style={ {fontWeight: "bold"} }>{`${props.profile.firstName} ${props.profile.name}`} </span>
                <span> {` || ${props.profile.userLocation.town}, ${props.profile.userLocation.country}`} </span>
            </div>
            <Avatar status={props.profile.status} ava={props.profile.profile.photos.photo_small}
                    setStatus={props.setUserStatusThunkCreator}/>
            { props.profile.profile.lookingForAJob ?
                <div> Looking for a job: {props.profile.profile.lookingForAJobDescription} </div>
                : null
            }
            <PostFormContainer onSubmit={onSubmitProfileMessage}/>
            {postsList}
        </div>)
};

export {Profile};