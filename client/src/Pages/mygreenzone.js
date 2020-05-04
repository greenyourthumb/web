import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

import Nav from "../components/Nav"
import SideNav from "../components/SideNav"
import DashboardCards from "../components/DashboardCards"
import CurrentWeather from "../components/CurrentWeather"
import ToDoList from "../components/ToDoList"

import Footer from "../components/Footer"

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: '#A4DFDF',
            borderColor: 'rgba(0,0,0,1)',
            data: [65, 59, 80, 81, 56]
        },  {
            label: 'Temperature',
            backgroundColor: '#FFE6AA',
            borderColor: 'rgba(0,0,0,1)',
            data: [80, 91, 82, 86, 95]
        },  {
            label: 'Humidity',
            backgroundColor: '#FFB0C1',
            borderColor: 'rgba(0,0,0,1)',
            data: [30, 41, 39, 20, 39]
        },  {
            label: 'Wind',
            backgroundColor: '#9AD0F5',
            borderColor: 'rgba(0,0,0,1)',
            data: [8, 9, 12, 14, 6]
        }
    ]
}

class MyGreenZone extends Component {
    constructor() {
        super()
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


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
                                <DashboardCards/>

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
