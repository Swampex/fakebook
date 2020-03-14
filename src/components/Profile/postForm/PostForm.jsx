import React from "react";
import classes from './PostForm.module.css';

const PostForm = (props) => {
    return (
        <div className={classes.postForm}>
            <textarea className={classes.postForm__textarea} onChange={props.updatePost}
                      value={props.postInProcess} cols={'30'} rows={'5'} placeholder={'New post'}></textarea>
            <input onClick={props.addPost} className={classes.postForm__button} type={'button'} value={'Publish'}></input>
        </div>
    );
};

export default PostForm;
