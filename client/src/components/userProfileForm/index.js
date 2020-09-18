import React, { Component } from "react";

class UserProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            zipCode: '',
            about: '',
            interests: '',
        }
    }

    handleInputChange(property) {
        return (e) => {
            this.props.user[property] = e.target.value;
            this.setState({
                [property]: e.target.value,
            });
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let userData = {}
        if (this.state.about) {
            userData.about = this.state.about;
        }
        if (this.state.interests) {
            userData.interests = this.state.interests;
        }
        if (this.state.firstName) {
            userData.firstName = this.state.firstName;
        }
        if (this.state.lastName) {
            userData.lastName = this.state.lastName;
        }
        if (this.state.zipCode) {
            userData.zipCode = this.state.zipCode;
        }
        this.props.handleProfileUpdate(userData);
    };

    render() {
        return (
            <form role="form">
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.props.user.firstName} onChange={this.handleInputChange("firstName")} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.props.user.lastName} onChange={this.handleInputChange("lastName")} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">About</label>
                    <div className="col-lg-9">
                        <textarea className="form-control" rows="2" value={this.props.user.about} onChange={this.handleInputChange("about")} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Interested In:</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.props.user.interests} onChange={this.handleInputChange("interests")} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">ZIP Code</label>
                    <div className="col-lg-3">
                        <input className="form-control" type="text" value={this.props.user.zipCode} onChange={this.handleInputChange("zipCode")} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-9">
                        <input type="reset" className="btn btn-secondary" value="Cancel" />
                        <input type="button" className="btn btn-primary" value="Save Changes" onClick={this.handleFormSubmit} />
                    </div>
                </div>
            </form>
        )
    }

}



export default UserProfileForm;
