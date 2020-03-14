import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post__message}>
                {props.post.text}
            </div>
            <div className={classes.like} onClick={props.toggleLike}>
                <img src={props.likeImg.likeOn || props.likeImg.likeOff} alt="like"/>
                <div className={classes.like__counter}>{props.post.likeCounter}</div>
            </div>
        </div>
    )
};

export default Post;