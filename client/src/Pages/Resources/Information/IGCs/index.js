import React from "react";
import "./style.css";

import TopNav from "../../../../components/TopNav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"


function IGCs() {
    return (
        <>
            <div className="sb-nav-fixed">
                <TopNav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Local Garden Centers</h1>
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

export default IGCs;
