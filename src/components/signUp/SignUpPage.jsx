import React from "react";
import {Input} from "../FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {minLengthCreator, requiredField} from "../../utils/validators";
import {NavLink} from "react-router-dom";
import cssHeader from "../Header/Header.module.css"

const minLengthField8 = minLengthCreator(8);

let SignUpPage = (props) => {
    let signUpSubmit = (formData) => {
        props.signupThunkCreator(formData.login, formData.email, formData.password)
    };

    return <div>
        <h1>Registration</h1>
        <SignUpForm onSubmit={signUpSubmit} {...props}/>
    </div>
};

let SignUpForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={"login"} placeholder={"login"} validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={"email"} placeholder={"email"} validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={"password"} placeholder={"password"} type={"password"}
                   validate={[requiredField, minLengthField8]}/>
        </div>
        <div>
            <button>Sign me up</button>
        </div>
        { props.error &&
        <div>common error: {props.error}</div>
        }
        { props.isShowingSignupSuccess &&
        <div>Your registration is successful. Now you can
            <NavLink to={"/login"} className={cssHeader.a__userLogin}>log in</NavLink></div>
        }
    </form>
};

SignUpForm = reduxForm({form: "signUpForm"})(SignUpForm);

export default SignUpPage;