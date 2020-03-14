import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends,
        communs: state.sidebarPage.communs
    }
};

const SidebarContainer = connect(mapStateToProps, null)(Sidebar);

export default SidebarContainer;