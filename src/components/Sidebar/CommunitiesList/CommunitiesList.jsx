import React from "react";
import cssCommuns from './CommunitiesList.module.css';

const CommunitiesList = (props) => {
    return (
        <div className={cssCommuns.community}>
            <img src={props.avatar} className={cssCommuns.community__avatar} alt={"community__avatar"} />
            <div>{props.name}</div>
        </div>
    )
};

export default CommunitiesList;