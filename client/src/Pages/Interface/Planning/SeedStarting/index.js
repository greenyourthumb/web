import React from "react";
import "./style.css";

import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"


function SeedStarting() {
    return (
        <>
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Seed Starting</h1>
        <hr/>
                                
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
        </>

    );
}

export default  SeedStarting;
