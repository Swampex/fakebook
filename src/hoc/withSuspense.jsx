import React, {Suspense} from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {

    }
};

export const withSuspense = (Component) => {
    class SuspenseComponent extends React.Component {
        render() {
            return (
                <Suspense fallback={<div>Loading</div>}>
                    <Component {...this.props}/>
                </Suspense> )
        }
    }
    let ConnectedSuspenseComponent = connect(mapStateToPropsForRedirect)(SuspenseComponent);

    return ConnectedSuspenseComponent;
};