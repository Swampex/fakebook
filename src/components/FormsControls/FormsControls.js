import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const errorCondition = meta.touched && meta.error;
    return <div>
        <textarea name="" id="" {...input} {...props}
            className={ `${props.className} ${errorCondition && styles.error}` } />
        { errorCondition && <div><span className={styles.error}>{meta.error}</span></div> }
    </div>
};

export const Input = ({input, meta, ...props}) => {
    const errorCondition = meta.touched && meta.error;
    return <div>
        <input name="" id="" {...input} {...props}
                  className={ `${props.className} ${errorCondition && styles.error}` } />
        { errorCondition && <div><span className={styles.error}>{meta.error}</span></div> }
    </div>
};