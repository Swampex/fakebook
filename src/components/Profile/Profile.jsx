import React from 'react';
import PostContainer from "./post/PostContainer";
import PostFormContainer from "./postForm/PostFormContainer";
import Avatar from "./avatar/Avatar";
import Preloader from "../common/Preloader";
import {setUserStatusThunkCreator} from "../../redux/reducers/profile-reducer";

const Profile = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    let postsList = props.posts
         .map(p => <PostContainer post={p} key={p.id}/>);

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
            <PostFormContainer/>
            {postsList}
        </div>)
};

export {Profile};