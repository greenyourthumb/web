import ImageUpload from "../../components/ImageUpload"
import UserProfileForm from "../../components/userProfileForm"
import React, { Component } from "react";
import API from "../../Utils/API";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
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

    handleProfileUpdate = (userData) => {
        API.updateUserProfile(userData)
            .then((res) =>{ 
                this.loadItems();
            })
            .catch((err) => console.log(err));
    };
    
    render() {
        return (
            <div className="row my-2">
            <div className="col-lg-6 order-lg-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="" data-target="#messages" data-toggle="tab" className="nav-link">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                    </li>
                </ul>
                <div className="tab-content py-4">
                    <div className="tab-pane active" id="profile">
        <h5 className="mb-3">{this.state.user.firstName} {this.state.user.lastName} Profile</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <h6>About:</h6>
                                <p>
                                    {this.state.user.about}
                            </p>
                                <h6>Interested in:</h6>
                                <p>
                                    {this.state.user.interests}
                            </p>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="messages">
                            <div className="alert alert-info alert-dismissable">
                                <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
                    </div>
                            <table className="table table-hover table-striped">
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
                                </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane" id="edit">
                            <UserProfileForm user={this.state.user} handleProfileInfoUpdate={this.handleProfileUpdate} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 order-lg-1 text-center">
                    <h6 className="mt-2">Upload a photo</h6>
                    <ImageUpload user={this.state.user} handleImageUpdate={this.handleProfileUpdate} />

                </div>
            </div>
        )
    }
}

export default UserProfile;

