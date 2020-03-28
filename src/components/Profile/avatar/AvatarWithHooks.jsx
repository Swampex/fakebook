import React, {useEffect, useState} from "react";
import classes from './Avatar.module.css';
import anonymous from "../../../resources/anonymous.png";

const AvatarWithHooks = ({status, ava, setStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [statusState, setStatusState] = useState(status);

    useEffect( () => {
        setStatusState(status);
    }, [status] );

    let toggleEditMode = (event) => {
        setEditMode(!editMode);

        if (editMode && statusState !== event.target.value) {
            setStatus(event.target.value);
        }
    };

    const showStatus = () => {
        if (!statusState) {
            return (
                <div className={classes.avatar__statusEmpty}>
                    <span>введите свой статус</span>
                </div>
            )
        }
        return editMode
            ? <div>
                <input className={classes.avatar__status} onBlur={toggleEditMode}
                       autoFocus={true} type="text" defaultValue={statusState}/>
            </div>
            : <div className={classes.avatar__status} onClick={toggleEditMode}>
                <span>{statusState}</span>
            </div>
    };

    return (
        <div className={classes.avatar}>
            <img className={classes.avatar__img}
                 src={ava || anonymous} alt="meAva"/>
            {showStatus()}
        </div>
    )
};

export default AvatarWithHooks;