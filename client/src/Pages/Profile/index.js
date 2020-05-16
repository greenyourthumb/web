import React, { Component } from 'react'
import UserProfile from '../../components/UserProfile'
import TopNav from "../../components/TopNav"
import SideNav from "../../components/SideNav"
import Footer from "../../components/Footer"

class Profile extends Component {

    render() {

        return (
            <div className="sb-nav-fixed">
                <TopNav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Settings</h1>
                                <hr />
                                <div>
                                    <UserProfile />
                                </div>                            
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
        )
    }

}

export default Profile;