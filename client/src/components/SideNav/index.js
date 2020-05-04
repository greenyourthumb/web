import React from "react";



function SideNav(props) {
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="/mygreenzone"><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>Dashboard</a>

                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseLayouts-planning" aria-expanded="false" aria-controls="collapseLayouts-planning">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>Plan
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts-planning" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/layout">Design Studio</a>
                                    <a className="nav-link" href="/seed-starting">Seed Starting</a>
                                    <a className="nav-link" href="/budgeting">Budgeting</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseLayouts-monitoring" aria-expanded="false" aria-controls="collapseLayouts-planning">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>Manage
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts-monitoring" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/my-cal">MyCal</a>
                                </nav>
                            </div>

                            <div className="sb-sidenav-menu-heading">Communicate</div>
                            <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseLayouts-connect" aria-expanded="false" aria-controls="collapseLayouts-connect">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>Connect
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts-connect" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/people">People</a>
                                    <a className="nav-link" href="/forums">Forums</a>
                                    <a className="nav-link" href="/projects">Projects</a>
                                </nav>
                            </div>

                            <div className="sb-sidenav-menu-heading">Resources</div>
                            <a className="nav-link" href="/ipm"><div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>IPM</a>
                            <a className="nav-link" href="/gallery"><div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>Gallery</a>
                            <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseLayouts-info" aria-expanded="false" aria-controls="collapseLayouts-info">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>Information
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts-info" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/garden-centers">IGCs</a>
                                    <a className="nav-link" href="/seed-companies">Seed Companies</a>
                                    <a className="nav-link" href="/books">Books</a>
                                    <a className="nav-link" href="/blogs">Blogs</a>
                                    <a className="nav-link" href="/podcasts">Podcasts</a>
                                </nav>
                            </div>    
                        </div>

                    </div>
                    <div className="sb-sidenav-footer" style={{backgroundColor: "#101F2B"}}>
                        <div className="small">Logged in as:</div>{props.children}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default SideNav;
