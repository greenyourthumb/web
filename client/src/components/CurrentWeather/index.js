import React, { Component } from "react";
import axios from 'axios'

class CurrentWeather extends Component {
 
    constructor() {
        super()
        this.state = {
            temp: '',
            humidity: '',
            wind: '',
            clouds: '',
            city: '',
        }
    }
    componentDidMount() {
        this.getWeatherData();
    }

    getWeatherData = () => {
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?zip=75098,us&units=imperial&appid=166a433c57516f51dfab1f7edaed8413')
            .then((response) =>
                 this.setState({
                    temp: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    wind: response.data.wind.speed,
                    clouds: response.data.clouds.all,
                    city: response.data.name,
                 })
            )
            .catch((err) => console.log(err));
        }
 

    render() {
        return (
            <div className="col" >
                <div className="row">
                    <div className="col alert" style={{ backgroundColor: "#D6D8D9", marginLeft: "0px" }}>
                        Current Weather Report For {this.state.city} 
                    </div>
                </div>
                <div className="row">
                    <div className="col alert" style={{ backgroundColor: "#A4DFDF" }}>
                        <span>Clouds </span>
                        <span >{this.state.clouds} %</span>
                    </div>
                    <div className="col alert" style={{ backgroundColor: "#FFE6AA", marginLeft: "5px" }}>
                        <span >Temperature </span>
                        <span >{this.state.temp}°</span>
                    </div>
                    <div className="col alert" style={{ backgroundColor: "#FFB0C1", marginLeft: "5px" }}>
                        <span >Humidity </span>
                        <span >{this.state.humidity} %</span>
                    </div>
                    <div className="col alert" style={{ backgroundColor: "#9AD0F5", marginLeft: "5px" }}>
                        <span >Wind </span>
                        <span >{this.state.wind} mph</span>
                    </div>
                </div>
    
    
            </div>
    
    
        );
    }
    }
    

export default CurrentWeather;
