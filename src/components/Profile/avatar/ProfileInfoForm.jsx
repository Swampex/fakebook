import React from "react";
import {createField, Input, Textarea} from "../../FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import css from "./ProfileInfoForm.module.css";
import cssError from "../../FormsControls/FormsControls.module.css";

const ProfileInfoForm = ({handleSubmit, contacts, error}) => {
    return <div>
    <form onSubmit={handleSubmit} className={css.form}>

        {createField("name", "name", Input, [])}
        {createField("firstName", "firstName", Input, [])}
        {createField("userLocation.town", "town", Input, [])}
        {createField("userLocation.country", "country", Input, [])}
        {createField("profile.lookingForAJob", "", Input, [],
            {type: "checkbox"}, "Do you look for a job?")}
        {createField("profile.lookingForAJobDescription", "what kind of job do you seek", Textarea, [])}
        {contacts !== null && Object.keys(contacts).map(key => {
            return <div>
                {key}:
                {createField("profile.contacts."+key, key, Input, [])}
            </div>
        })}
        <div><button onClick={()=>{}}>Save</button></div>
    </form>
        {error &&
        <div>
            <span className={cssError.error}>{error}</span>
        </div>}
    </div>
};

const ProfileInfoReduxForm = reduxForm({form: 'profile'})(ProfileInfoForm);

export default ProfileInfoReduxForm;