import React, { Component } from 'react'

import Nav from "../../../components/Nav"
import SideNav from "../../../components/SideNav"
import Footer from "../../../components/Footer"
import PeopleList from "../../../components/People"
import API from "../../../Utils/API";

import moment from 'moment';

class People extends Component {
    constructor() {
        super()
        this.state = {
            users: [{}],
        }
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getUsers()
            .then((res) =>
                this.setState({
                    users: res.data,
                })
            )
            .catch((err) => console.log(err));
    };

    render() {

        return (
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">People</h1>
                                <hr />
                                <PeopleList>

                                    {this.state.users.map((user, index) => (

                                        <div className="col-xs-6 col-xxs-12">
                                            <div className="member--item online">
                                                <div className="img img-circle">
                                                    <a href="member-activity-personal.html" className="btn-link">
                                                        <img src={user.profileImageURL} alt="" />
                                                    </a>
                                                </div>
                                                <div className="name">
                                                    <h3 className="h6 fs--12">
                                                        <a href="member-activity-personal.html" className="btn-link">{user.firstName} {user.lastName}</a>
                                                    </h3>
                                                </div>
                                                <div className="activity">
                                                    <p><i className="fa mr--8 fa-clock-o"></i>Joined {moment(user.created).format("MMM YYYY")}</p>
                                                </div>
                                                <div className="actions">
                                                    <ul className="nav">
                                                        <li>
                                                            <a href="#" title="Send Message" className="btn-link" data-toggle="tooltip"
                                                                data-placement="bottom">
                                                                <i className="fa fa-envelope-o"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add Friend" className="btn-link" data-toggle="tooltip"
                                                                data-placement="bottom">
                                                                <i className="fa fa-user-plus"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Media" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                                                <i className="fa fa-folder-o"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )}

                                </PeopleList>

                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>


        );
    }
}

export default People;
