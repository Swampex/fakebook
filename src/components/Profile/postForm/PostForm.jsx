import React from "react";
import classes from './PostForm.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {Textarea} from "../../FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

let PostForm = (props) => {
    return (
        <form className={classes.postForm} onSubmit={props.handleSubmit}>
            <Field placeholder={'New post'} className={classes.postForm__textarea}
            component={Textarea} name={"profilePost"} validate={[requiredField, maxLength30]}/>
            <div>
                <button className={classes.postForm__button}>Publish</button>
            </div>
        </form>
    );
};

PostForm = reduxForm({form: "profilePostForm"})(PostForm);

export default PostForm;
