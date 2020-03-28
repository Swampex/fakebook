import {addMessageActionCreator} from "../../../redux/reducers/dialogs-reducer";
import MessageForm from "./MessageForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {}
};
let mapDispatchToProps = dispatch => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const MessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm);

export default MessageFormContainer;