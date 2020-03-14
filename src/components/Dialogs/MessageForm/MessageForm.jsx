import React from "react";
import cssMessForm from './MessageForm.module.css';
import {Field, reduxForm} from "redux-form";

let MessageForm = props => {

    return (
        <form className={cssMessForm.messForm} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} className={cssMessForm.messForm__textarea} name="newMessageBody"
                   placeholder={"Enter your message"} />
            <div>
                <button className={cssMessForm.messForm__button}>Send</button>
            </div>
        </form>
    )
};

MessageForm = reduxForm({
    form: "dialogMessage"
})(MessageForm);

export default MessageForm;