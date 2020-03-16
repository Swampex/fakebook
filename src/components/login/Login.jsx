import React from "react";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {Input} from "../FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import css from "../FormsControls/FormsControls.module.css";

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
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} component={Input} name={"login"} validate={[requiredField]} />
            </div>
            <div>
                <Field placeholder={"password"} component={Input}
                       name={"password"} validate={[requiredField]} type={"password"}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            {!props.isLoginSuccess &&
            <div>
                <span className={css.error}>{props.errorMessage}</span>
            </div>}
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default Login;