import likeOn from '../../../resources/red_heart_2.jpg';
import likeOff from '../../../resources/heart.png';
import Post from "./Post";
import connect from "react-redux/es/connect/connect";
import {toggleLikeActionCreator} from "../../../redux/reducers/profile-reducer";

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchToggleLike: (postId) => dispatch(toggleLikeActionCreator(postId))
    };
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    let result = {
        post: ownProps.post
    };
    ownProps.post.liked ? result.likeImg = {likeOn} : result.likeImg = {likeOff};
    result.toggleLike = () => {
        propsFromDispatch.dispatchToggleLike(ownProps.post.id)
    };
    return result;
};

const PostContainer = connect(null, mapDispatchToProps, mergeProps)(Post);

export default PostContainer;