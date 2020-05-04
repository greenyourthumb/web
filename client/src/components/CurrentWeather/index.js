import React from "react";

function CurrentWeather(props) {
    return (
        <div className="col" >
            <div className="row">
                <div className="col alert" style={{ backgroundColor: "#D6D8D9", marginLeft: "0px" }}>
                    Current Weather Report From {props.children}
                </div>
            </div>
            <div className="row">
                <div className="col alert" style={{ backgroundColor: "#A4DFDF" }}>
                    <span>Rainfall </span>
                    <span >Some</span>
                </div>
                <div className="col alert" style={{ backgroundColor: "#FFE6AA", marginLeft: "5px" }}>
                    <span >Temperature </span>
                    <span >Some</span>
                </div>
                <div className="col alert" style={{ backgroundColor: "#FFB0C1", marginLeft: "5px" }}>
                    <span >Humidity </span>
                    <span >Some</span>
                </div>
                <div className="col alert" style={{ backgroundColor: "#9AD0F5", marginLeft: "5px" }}>
                    <span >Wind </span>
                    <span >Some</span>
                </div>
            </div>


        </div>


    );
}

export default CurrentWeather;
