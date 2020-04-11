import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const errorCondition = touched && error;
    return <div>
        <textarea name="" id="" {...input} {...props}
                  className={`${props.className} ${errorCondition && styles.error}`}/>
        {errorCondition && <div><span className={styles.error}>{error}</span></div>}
    </div>
};

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const errorCondition = touched && error;
    return <div>
        <input name="" id="" {...input} {...props}
               className={`${props.className} ${errorCondition && styles.error}`}/>
        {errorCondition && <div><span className={styles.error}>{error}</span></div>}
    </div>
};

export const createField = (name, placeholder, component, validators, extraAttrib = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} component={component}
               name={name} validate={validators} {...extraAttrib}
        /> {text}
    </div>
);