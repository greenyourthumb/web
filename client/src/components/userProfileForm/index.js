import React, { Component } from "react";

import API from "../../Utils/API";

class UserProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            firstName: '',
            lastName: '',
            email: '',
            zipCode: '',
            password: '',
            about: '',
            interests: '',
        }
    }
    componentDidMount() {
        this.loadItems();
    }
    loadItems = () => {
        API.getUserProfile()
            .then((res) =>
                this.setState({
                    user: res.data,
                })
            )
            .catch((err) => console.log(err));
    };

    handleInputChange(property) {
        return (e) => {
            this.setState({
                [property]: e.target.value,
            });
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.title && this.state.summary) {
            API.updateUserProfile({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                zipCode: this.state.zipCode,
                password: this.state.password,
                about: this.state.about,
                interests: this.state.interests,
            })
                .then((res) => this.loadItems())
                .catch((err) => console.log(err));
        }
    };

    render() {
        return (
            <form role="form">
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.user.firstName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.user.lastName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="email" value={this.state.user.userName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">About</label>
                    <div className="col-lg-9">
                        <textarea className="form-control" rows="2" value={this.state.user.about} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Interested In:</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.user.interests} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">ZIP Code</label>
                    <div className="col-lg-3">
                        <input className="form-control" type="text" value={this.state.user.zipCode} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="password" value="11111122333" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="password" value="11111122333" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-9">
                        <input type="reset" className="btn btn-secondary" value="Cancel" />
                        <input type="button" className="btn btn-primary" value="Save Changes" onSubmit={this.handleSubmit} />
                    </div>
                </div>
            </form>
        )
    }

}



export default UserProfileForm;
