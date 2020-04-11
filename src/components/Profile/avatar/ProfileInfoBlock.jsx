import classes from "./Avatar.module.css";
import Contact from "./Contact";
import React from "react";

const ProfileInfoBlock = ({contacts, isOwner, toggleProfileEditMode, profile}) => {
    return (
        <div className={classes.info__block}>
            <span style={{fontWeight: "bold"}}>
                {`${profile.firstName || ""} ${profile.name || ""}`}
            </span>
            {profile.userLocation &&
            <span> {` || ${profile.userLocation.town}, ${profile.userLocation.country}`} </span>}
            { profile.profile && profile.profile.lookingForAJob &&
            <div> Looking for a job: {profile.profile.lookingForAJobDescription} </div> }
            {contacts !== null && Object.keys(contacts).map(key => {
                return <Contact name={key} url={contacts[key]} key={key}/>
            })}
            {isOwner && <div><button onClick={toggleProfileEditMode}>Edit profile</button></div>}
        </div>
    )
};

export default ProfileInfoBlock;