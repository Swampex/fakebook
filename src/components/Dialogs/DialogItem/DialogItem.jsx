import {NavLink} from "react-router-dom";
import cssDialog from "../Dialogs.module.css";
import React from "react";

const DialogItem = props => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={cssDialog.dialog}
                 activeClassName={cssDialog.active}>
            <div>
                <img className={cssDialog.dialog__ava} src={props.ava} alt={"dialog__ava"}/>
            </div>
            <span className={cssDialog.dialog__name}>{props.name}</span>
        </NavLink>
    )
};

export default DialogItem;