import React from "react";
import cssDialog from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageFormContainer from "./MessageForm/MessageFormContainer";

const DialogsPage = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;

    let dialogItems = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                  ava={dialog.avatar} key={dialog.id}/>);
    let messageItems = messages.map(message => {
        if (message !== undefined) {
            let dialog = dialogs.find(d => d.name === message.author);
            return <MessageItem text={message.text} avatar={dialog.avatar}
                                author={message.author} key={message.id}/>
        }
        return null;
    });

    let onDialogMessageFormSubmit = (body) => {
        props.addMessageActionCreator(body.newMessageBody);
    };
    
    return (
        <div className={cssDialog.dialogsPage}>
            <div>
                <h5>Dialog with:</h5>
                {dialogItems}
            </div>
            <div className={cssDialog.messages}>
                {messageItems}
                <div className={cssDialog.messageForm}>
                    <MessageFormContainer onSubmit={onDialogMessageFormSubmit}/>
                </div>
            </div>
        </div>
    )
};

export default DialogsPage;