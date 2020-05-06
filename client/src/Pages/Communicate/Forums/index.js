import React from "react";

import Nav from "../../../components/Nav"
import SideNav from "../../../components/SideNav"
import Footer from "../../../components/Footer"

import Forum from '../../../components/Forum'

function Forums() {
    return (
        <>
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Forums</h1>
                                <Forum />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
        </>

    );
}

export default Forums;
