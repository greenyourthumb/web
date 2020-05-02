import React, { Component } from 'react'

import Nav from "../components/Nav"
import SideNav from "../components/SideNav"
import Footer from "../components/Footer"

class MyGreenZone extends Component {
    constructor() {
        super()
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav >{this.props.location.state.firstname}</SideNav>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Dashboard <p >welcome {this.props.location.state.firstname}
                                    </p></h1>
                                <hr />

                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        )
    }

}

export default MyGreenZone;
