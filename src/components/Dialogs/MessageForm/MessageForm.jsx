import React from "react";
import cssMessForm from './MessageForm.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../FormsControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators";

const maxLength = maxLengthCreator(100);

let MessageForm = props => {

    return (
        <form className={cssMessForm.messForm} onSubmit={props.handleSubmit}>
            <Field component={Textarea} className={cssMessForm.messForm__textarea} name="newMessageBody"
                   placeholder={"Enter your message"} validate={[maxLength]}/>
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