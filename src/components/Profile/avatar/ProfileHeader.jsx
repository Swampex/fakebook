import React, {useEffect, useState} from "react";
import classes from "./Avatar.module.css";

const ProfileHeader = ({status, setStatus, isOwner}) => {

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
                <div className={classes.info__statusEmpty}>
                    <span>введите свой статус</span>
                </div>
            )
        }
        return editMode
            ? <div>
                <input className={classes.info__status} onBlur={toggleEditMode}
                       autoFocus={true} type="text" defaultValue={statusState}/>
            </div>
            : <div className={classes.info__status} onClick={toggleEditMode}>
                <span>{statusState}</span>
            </div>
    };

    return (
        <div className={classes.info}>

            {showStatus()}
        </div>
    )
};

export default ProfileHeader;