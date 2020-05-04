import React, { Component } from 'react';
import Calendar from 'react-calendar';
import "./style.css";
import 'react-calendar/dist/Calendar.css';

import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"


class MyCal extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">MyCal</h1>
                                <hr />
                                <Calendar
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        );
    }
}
export default MyCal;
