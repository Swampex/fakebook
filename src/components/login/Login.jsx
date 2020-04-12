import React from "react";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {createField, Input} from "../FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import css from "../FormsControls/FormsControls.module.css";
import ReCAPTCHA from "react-google-recaptcha";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe);
    };

    return (
        <div>
            <h1>Login</h1>
            {props.isAuth ? <Redirect to={"/profile"}/> :
                <LoginReduxForm onSubmit={onSubmit} {...props} />
            }
        </div>
    )
};

const LoginForm = (props) => {

    const onChange = (value) => {
        console.log("Captcha value:", value);
        props.setCaptchaValueTC(value);
    };

    return (
        <form onSubmit={props.handleSubmit}>
            {createField("login", "login", Input, [requiredField])}
            {createField("password", "password", Input, [requiredField],
                {type: "password"})}
            {createField("rememberMe", "", Input, null,
                {type: "checkbox"}, "remember me")}

            <ReCAPTCHA sitekey="6LcwtugUAAAAAJV6-_hi0LUyRTWQISpxSNLxnezj" onChange={onChange} />

            <div> <button>Login</button> </div>
            {!props.isLoginSuccess &&
            <div>
                <span className={css.error}>{props.errorMessage}</span>
            </div>}
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default Login;