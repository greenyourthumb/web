import React, { Component } from 'react'

import Topic from "../../../../components/Forum/Topic"
import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"

class Topics extends Component {

    render() {

        return (
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Topics</h1>
                                <hr />
                                <div>
                                    <Topic />
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

export default Topics;