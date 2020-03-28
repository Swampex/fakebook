import React from "react";
import css from "./users.module.css";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

let Users = (props) => {
    let pages = [];
    for (let page = 1; page <= props.pageCounter; page++ ) {
        pages.push(page);
    }
    return (
        <div>
            <Paginator {...props}/>
            <div className={css.usersContainer}>
                { props.users.map(u =>
                    <User uId={u.id} photo={u.photo} name={u.name} firstName={u.firstName}
                          userLocation={u.userLocation} followed={u.followed} {...props}/>
                )}
            </div>
        </div>
    )
}

export default Users;