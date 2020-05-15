import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from 'axios'
//import API from "../Utils/API";

import Nav from "../components/Nav"
import SideNav from "../components/SideNav"
import DashboardCards from "../components/DashboardCards"
import CurrentWeather from "../components/CurrentWeather"
import ToDoList from "../components/ToDoList"

import Footer from "../components/Footer"

var dow_array = [];
    var dates = [];
    var temps = [];
    var humid = [];
    var windy = [];
    var cloudy = [];
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
      var offset = d.getDay();
      for (var i = 0; i < weekday.length; i++) {
        var dow = (i + offset) % weekday.length;
        dow_array.push(weekday[dow]);
        if (dow_array.length === 5) {
          break;
        }
      }
      axios
    .get('https://api.openweathermap.org/data/2.5/forecast?zip=75098,us&units=imperial&appid=166a433c57516f51dfab1f7edaed8413')
    .then(function (response) {
        var i = 0;
        while (i < 40) {
          var date = response.data.list[i].dt_txt;
          var temp = response.data.list[i].main.temp;
          var humidity = response.data.list[i].main.humidity;
          var wind = response.data.list[i].wind.speed;
          var clouds = response.data.list[i].clouds.all;
          dates.push(date);
          temps.push(temp);
          humid.push(humidity);
          windy.push(wind);
          cloudy.push(clouds);
          i = i + 8;
        }
      });

const state = {
    labels: dow_array,
    datasets: [
        {
            label: 'Cloudy',
            backgroundColor: '#A4DFDF',
            borderColor: 'rgba(0,0,0,1)',
            data: cloudy
        },  {
            label: 'Temperature',
            backgroundColor: '#FFE6AA',
            borderColor: 'rgba(0,0,0,1)',
            data: temps
        },  {
            label: 'Humidity',
            backgroundColor: '#FFB0C1',
            borderColor: 'rgba(0,0,0,1)',
            data: humid
        },  {
            label: 'Wind',
            backgroundColor: '#9AD0F5',
            borderColor: 'rgba(0,0,0,1)',
            data: windy
        }
    ]
}


class MyGreenZone extends Component {
    constructor() {
        super()
        this.state = {
            // chart_data : {
            //     labels: dow_array,
            //     datasets: [
            //          {
            //             label: '',
            //             backgroundColor: '',
            //             borderColor: '',
            //             data: [],
            //         },
            //     ]
            // },
            // isLoggedIn: true,
        }
    }
    // componentDidMount() {
    //     this.loadItems();
    // }

    //    loadItems = () => {
    //     API.getWeatherForecast()
    //         .then((res) =>
    //             this.setState({
    //                 chart_data: {   
    //                     ...this.state.chart_data,
    //                     datasets: [{
    //                         ...this.state.datasets,
    //                         label: 'Temperature',
    //                         backgroundColor: '#FFE6AA',
    //                         borderColor: 'rgba(0,0,0,1)',
    //                         data: res.tempData,
    //                     },
    //                 ]
    //                 }
    //             }) 
    //         )
    //         .catch((err) => console.log(err))   
    // };


    render() {
        
        return (

            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav >{this.props.location.state.firstname}</SideNav>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Dashboard</h1>
                                <hr />
                                <DashboardCards />

                                <div className="row">

                                    <div className="col-xl-3">
                                        <ToDoList />
                                    </div>
                                    <div className="col-xl-3">

                                    </div>
                                    <div className="col-xl-6">
                                        <CurrentWeather>{this.props.location.state.zipcode}</CurrentWeather>

                                        <Bar
                                            data={state}
                                            options={{
                                                title: {
                                                    display: true,
                                                    text: 'Weather For Next 5 Days',
                                                    fontSize: 20
                                                },
                                                legend: {
                                                    display: true,
                                                    position: 'right'
                                                }
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        )
    }

}

export default MyGreenZone;
