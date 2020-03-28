import PostForm from "./PostForm";

import {addPostActionCreator} from "../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postInProcess: state.profilePage.postInProcess,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator())
    }
};

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;
