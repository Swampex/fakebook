import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";
import {addMessageActionCreator} from "../../redux/reducers/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
};

export default compose(
    connect(mapStateToProps, {addMessageActionCreator}),
    withAuthRedirect
)(DialogsPage);