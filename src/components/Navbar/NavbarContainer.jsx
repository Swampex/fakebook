import React from "react";
import {Navbar} from "./Navbar";
import {connect} from "react-redux";

class NavbarContainer extends React.Component {

    render() {
        return <Navbar {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth
    }
};

NavbarContainer = connect(mapStateToProps, null)(NavbarContainer);

export default NavbarContainer;