import cssDialog from "../Dialogs.module.css";
import React from "react";

const MessageItem = props => {
    if (props.author === 'me') {
        return (
            <div className={cssDialog.messageItemMe}>
                <div className={cssDialog.messageItem__author}>{props.author}</div>
                <div className={cssDialog.messageItem__text}>
                    {props.text}
                </div>
                <img src={props.avatar} className={cssDialog.dialog__ava} alt={"dialog__ava"}/>
            </div>
        )
    }
    return (
        <div className={cssDialog.messageItem}>
            <div className={cssDialog.messageItem__author}>{props.author}</div>
            <img src={props.avatar} className={cssDialog.dialog__ava} alt={"dialog__ava"}/>
            <div className={cssDialog.messageItem__text}>
                {props.text}
            </div>
        </div>
    )
};

export default MessageItem;