import React from 'react'
import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"




function CropCal() {

    return (
        <div className="sb-nav-fixed">
            <Nav />
            <div id="layoutSidenav">
                <SideNav />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Crop Calendar</h1>
                            <hr />
                            <div>
                                
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>

        </div>
    )


}

export default CropCal;