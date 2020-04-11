import React from "react";
import classes from './Avatar.module.css';
import anonymous from "../../../resources/anonymous.png";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileInfoBlock from "./ProfileInfoBlock";

class ProfileInfo extends React.Component {

    state = {
        profileEditMode: false
    };

    onMainPhotoSelected = (e) => {
        if(e.target.files.length) this.props.savePhoto(e.target.files[0]);
    };

    toggleProfileEditMode = () => {
        this.props.isProfileUpdateResultSuccess &&
        this.setState( {
            ...this.state,
            profileEditMode: !this.state.profileEditMode
        });
    };

    onSubmit = (formData) => {
        this.props.saveProfile(formData);
        this.toggleProfileEditMode();
    };

    render() {
        return (
            <div className={classes.info}>
                <div className={classes.avatar__block}>
                    <img className={classes.avatar__img}
                         src={this.props.ava || anonymous} alt="user's avatar"/>
                    {(this.props.isOwner) &&
                        <label htmlFor="file" className={classes.upload_label}>change avatar</label> }
                    <input type={"file"} onChange={this.onMainPhotoSelected} id="file" className={classes.upload_input}/>
                </div>
                {(this.props.isProfileUpdateResultSuccess && !this.state.profileEditMode)
                    ? <ProfileInfoBlock contacts={this.props.contacts} profile={this.props.profile}
                                        toggleProfileEditMode={this.toggleProfileEditMode} isOwner={this.props.isOwner} />
                    : <ProfileInfoForm onSubmit={this.onSubmit} initialValues={this.props.profile}
                                       contacts={this.props.contacts}/>
                }
            </div>
        )
    }
}

export default ProfileInfo;