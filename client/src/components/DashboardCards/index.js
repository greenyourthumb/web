import React from "react";

function DashboardCards() {
    return (
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body">New Topics for Your Taste</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="/forums">View Details</a>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-warning text-white mb-4">
                    <div className="card-body">New Projects</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="/projects">View Details</a>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                    <div className="card-body">Whats Growing On?</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="/crop-calendar">View Details</a>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-danger text-white mb-4">
                    <div className="card-body">Needs Your Attention!</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="/my-cal">View Details</a>
                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCards;
