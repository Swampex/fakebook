import React from "react";
import classes from './Avatar.module.css';
import anonymous from "../../../resources/anonymous.png";

class Avatar extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    onMainPhotoSelected = (e) => {
        if(e.target.files.length) this.props.savePhoto(e.target.files[0]);
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
                <div className={classes.avatar__statusEmpty}>
                    <span onClick={this.toggleEditMode}>введите свой статус</span>
                </div>
            )
        }
        return this.state.editMode
            ? <div>
                <input onBlur={this.toggleEditMode} className={classes.avatar__status}
                       autoFocus={true} type="text" defaultValue={this.state.status}/>
            </div>
            : <div className={classes.avatar__status}>
                <span onClick={this.toggleEditMode}>{this.state.status}</span>
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
                {(this.props.isOwner) &&
                    <label htmlFor="file" className={classes.upload_label}>change avatar</label> }
                {this.showStatus()}
                <input type={"file"} onChange={this.onMainPhotoSelected} id="file" className={classes.upload_input}/>
            </div>
        )
    }
}

export default Avatar;