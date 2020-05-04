import React from "react";

function WeatherForecast(props) {
    return (
        <div className="col-md-2">
            <ul className="list-group">
                <li className="list-group-item-dark">Current Weather in {props.children}</li>
                <li className="list-group-item">Temperature</li>
                <li className="list-group-item">Wind</li>
                <li className="list-group-item">Humidity</li>
                <li className="list-group-item">Chances of Rain</li>
            </ul>
        </div>

    );
}

export default WeatherForecast;
