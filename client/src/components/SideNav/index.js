import React from "react";



function SideNav() {
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="/mygreenzone"><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>Dashboard</a>

                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts-planning" aria-expanded="false" aria-controls="collapseLayouts-planning">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>Planning
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts-planning" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/mygreenzone/layout">Design Studio</a>
                                    <a className="nav-link" href="/mygreenzone/seed-starting">Seed Starting</a>
                                    <a className="nav-link" href="/mygreenzone/my-cal">MyCal</a>
                                    <a className="nav-link" href="/mygreenzone/budgeting">Budgeting</a>
                                </nav>
                            </div>

                            <div className="sb-sidenav-menu-heading">Communicate</div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts-connect" aria-expanded="false" aria-controls="collapseLayouts-connect">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>Connect
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts-connect" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/mygreenzone/people">People</a>
                                    <a className="nav-link" href="/mygreenzone/forums">Forums</a>
                                    <a className="nav-link" href="/mygreenzone/projects">Projects</a>
                                </nav>
                            </div>

                            <div className="sb-sidenav-menu-heading">Resources</div>
                            <a className="nav-link" href="/mygreenzone/ipm"><div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>IPM</a>
                            <a className="nav-link" href="/mygreenzone/gallery"><div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>Gallery</a>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts-info" aria-expanded="false" aria-controls="collapseLayouts-info">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>Information
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts-info" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/mygreenzone/garden-centers">IGCs</a>
                                    <a className="nav-link" href="/mygreenzone/seed-companies">Seed Companies</a>
                                    <a className="nav-link" href="/mygreenzone/books">Books</a>
                                    <a className="nav-link" href="/mygreenzone/blogs">Blogs</a>
                                    <a className="nav-link" href="/mygreenzone/podcasts">Podcasts</a>
                                </nav>
                            </div>    
                        </div>

                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>Start Bootstrap
                    </div>
                </nav>
            </div>
        </>
    );
}

export default SideNav;
