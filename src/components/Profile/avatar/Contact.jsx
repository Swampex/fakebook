import React from "react";
import css from "./Contact.module.css"

const Contact = (props) => {
    return (
        <div className={css.contactBlock}>
            <span className={css.name}>{props.name}: </span>
            <a className={css.url} href={props.url}>{props.url}</a>
        </div>
    )
}

export default Contact;