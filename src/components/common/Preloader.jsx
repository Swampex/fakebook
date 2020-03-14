import React from "react";
import loader from "../../resources/loader.gif";
import css from "./preloader.module.css";

let Preloader = (props) => {

    return (
        <div >
            <img src={loader} alt={"preloader"} className={css.preloader}/>
        </div>
)
};

export default Preloader;