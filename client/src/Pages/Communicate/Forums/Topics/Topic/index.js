import React, { Component } from 'react'

import Posts from "../../../../../components/Forum/Topic/Posts"
import Nav from "../../../../../components/Nav"
import SideNav from "../../../../../components/SideNav"
import Footer from "../../../../../components/Footer"

class Topic extends Component {

    render() {

        return (
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Posts</h1>
                                <hr />
                                <div>
                                    <Posts />
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

export default Topic;