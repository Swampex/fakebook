import React from "react";
import css from "./users.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pages = [];
    for (let page = 1; page <= props.pageCounter; page++ ) {
        pages.push(page);
    }
    return (
        <div>
            <div className={css.pagingBlock}>
            {pages.map( p => {
                return <div className={ (props.currentPage === p && css.pagingBlock__selectedPage)
                || css.pagingBlock__notSelectedPage}
                             onClick={ (e) => {props.onPageChanged(p)} } key={p}> {p} </div>
            })}
            </div>
            <div className={css.usersContainer}>
                { props.users.map(u =>
                    <div key={u.id} className={css.usersContainer__user}>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photo} className={css.userContainer__photo} alt=""/>
                        </NavLink>
                        <div className={css.userContainer__name}>{u.name} {u.firstName} </div>
                        <div className={css.userContainer__location}>{u.userLocation.town}, {u.userLocation.country}</div>
                        {u.followed
                            ? <button disabled={props.followingIdsInProgress.some(id => id === u.id)}
                                      onClick={() => props.unFollowThunkCreator(u.id) }
                                      className={css.userContainer__followBtn}>unfollow</button>

                            : <button disabled={props.followingIdsInProgress.some(id => id === u.id)}
                                      onClick={() => props.followThunkCreator(u.id)}
                                      className={css.userContainer__followBtn}>follow</button>
                        } </div>
                )}
            </div>
        </div>
    )
}

export default Users;