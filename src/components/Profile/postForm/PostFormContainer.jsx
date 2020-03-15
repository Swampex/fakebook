import PostForm from "./PostForm";
import connect from "react-redux/es/connect/connect";
import {addPostActionCreator} from "../../../redux/reducers/profile-reducer";

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
