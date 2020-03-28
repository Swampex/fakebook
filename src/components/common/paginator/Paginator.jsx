import React from "react";
import css from "./Paginator.module.css";

let Paginator = ({pageCounter, currentPage, onPageChanged}) => {
    let pages = [];
    for (let page = 1; page <= pageCounter; page++) {
        pages.push(page);
    }
    return (
        <div className={css.pagingBlock}>
            {pages.map(p => {
                return <div className={(currentPage === p && css.pagingBlock__selectedPage)
                || css.pagingBlock__notSelectedPage}
                            onClick={(e) => {
                                onPageChanged(p)
                            }} key={p}> {p} </div>
            })}
        </div>
    )
}

export default Paginator;