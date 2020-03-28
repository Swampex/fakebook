import React from "react";
import classes from './Avatar.module.css';
import anonymous from "../../../resources/anonymous.png";

class Avatar extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    toggleEditMode = (event) => {
        this.setState( {
            editMode: !this.state.editMode
        });

        if (this.state.editMode && this.state.status !== event.target.value) {
            this.props.setStatus(event.target.value);
        }
    };

    showStatus = () => {
        if (!this.props.status && !this.state.editMode) {
            return (
                <div onClick={this.toggleEditMode} className={classes.avatar__statusEmpty}>
                    <span>введите свой статус</span>
                </div>
            )
        }
        return this.state.editMode
            ? <div >
                <input onBlur={this.toggleEditMode} className={classes.avatar__status}
                       autoFocus={true} type="text" defaultValue={this.state.status}/>
            </div>
            : <div onClick={this.toggleEditMode} className={classes.avatar__status}>
                <span>{this.state.status}</span>
            </div>
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <div className={classes.avatar}>
                <img className={classes.avatar__img}
                     src={this.props.ava || anonymous} alt="meAva"/>
                {this.showStatus()}
            </div>
        )
    }
}

export default Avatar;