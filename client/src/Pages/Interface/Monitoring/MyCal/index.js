
import React, { Component } from 'react'
import 'moment/locale/en-ca';
import API from "../../../../Utils/API";
import moment from 'moment';
import "./style.css"
import { DatePickerInput } from 'rc-datepicker';
import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"
import { Input, FormBtn, TextArea, Select } from "../../../../components/Form";
import Reminders from "../../../../components/Reminders"
import 'rc-datepicker/lib/style.css';

class MyCal extends Component {
    constructor() {
        super()
        this.state = {
            myList: [{}],
            title: '',
            details: '',
            priority: '',
            dateSelected: '',
        }
    }
    componentDidMount() {
        this.loadItems();
    }
    loadItems = () => {
        API.getMyReminders()
            .then((res) =>
                this.setState({
                    myList: res.data,
                })
            )
            .catch((err) => console.log(err));
    };

    handleDateChange = (jsDate, dateString) => {
        console.log(jsDate);
        this.setState({
            dateSelected: dateString
        });

    }

    handleInputChange(property) {
        return (e) => {
            this.setState({
                [property]: e.target.value,
            });
        };
    }


    handdleSubmit = (event) => {
        event.preventDefault();
        if (this.state.title && this.state.dateSelected) {
            API.addReminder({
                title: this.state.title,
                details: this.state.details,
                priority: this.state.priority,
                dateSelected: this.state.dateSelected,
            })
                .then((res) => this.loadItems())
                .catch((err) => console.log(err));
        }
        this.setState({
            title: '',
            details: '',
            dateSelected: '',
            priority: 'Low',
        });

    }


    render() {
        const date = new Date();

        return (
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">MyCal</h1>
                                <hr />
                                <div className="row">

                                    <div className="col-md-3">
                                        <h3>Add Tasks/ Reminders</h3>
                                        <Input
                                            placeholder="Title"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.handleInputChange("title")}
                                        />
                                        <TextArea
                                            placeholder="Details"
                                            name="details"
                                            value={this.state.details}
                                            onChange={this.handleInputChange("details")}
                                        />
                                        <DatePickerInput
                                            onChange={this.handleDateChange}
                                            value={this.state.dateString}
                                            name="dateString"
                                            className='my-custom-datepicker-component'
                                        />
                                        <label className="col-form-label">Select Priority</label>
                                        <Select name="priority" onChange={this.handleInputChange("priority")} value={this.state.priority}>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                        </Select>
                                        <br />
                                        <FormBtn
                                            // disabled={!(this.state.title && this.state.dateString)}
                                            onClick={this.handdleSubmit}>Submit</FormBtn>
                                    </div>
                                    <Reminders>
                                        {this.state.myList.map((List, index) => (
                                            <div className={`alert ${List.priority}`} role="alert">
                                                <span>On {moment(List.dateSelected).format("MMM Do YY")}</span> <h5>{List.title}</h5> {List.details}
                                            </div>
                                        )
                                        )}
                                    </Reminders>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        );
    }
}
export default MyCal;
