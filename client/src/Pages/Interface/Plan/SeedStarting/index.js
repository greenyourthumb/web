import React, { Component } from "react";
import "./style.css";
import API from "../../../../Utils/API";
import { Input, FormBtn } from "../../../../components/Form";
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"

const columns = [
    { key: 'plant_name', name: 'Plant Name'},
    { key: 'variety', name: 'Variety' },
    { key: 'seed_seller', name: 'Seed From' },
    { key: 'sprouts_in', name: 'Sprouts In' },
    { key: 'ideal_temp', name: 'Ideal Temp'},
    { key: 'seed_depth', name: 'Seed Depth'  },
    { key: 'plant_spacing', name: 'Plant Spacing'},
    { key: 'row_spacing', name: 'Row Spacing'},
    { key: 'min_full_sun' , name: 'Min Sun'},
    { key: 'frost_hardy', name: 'Frost Hardy'},
    { key: 'soil_type', name: 'Soil Type'},
    { key: 'moisture_level', name: 'Moisture Level' },
    { key: 'ideal_ph', name: 'Ideal pH'},
    { key: 'link', name: 'Link'}
];

class SeedStarting extends Component {
    constructor() {
        super()
        this.state = {
            Mylist: [],
            item: [],
            plantName: "",
            plantVariety: "",
            plantSeller: "",
        }
    }
    componentDidMount() {
        this.loadItems();
    }
    loadItems = () => {
        API.getUserGrowList()
            .then((res) =>
                this.setState({
                    Mylist: res.data,
                })
            )
            .catch((err) => console.log(err));
    };

    handleInputChange(property) {
        return (e) => {
            this.setState({
                [property]: e.target.value,
            });
        };
    }

    addItem = (event) => {
        event.preventDefault();
        if (this.state.plantName && this.state.plantVariety && this.state.plantSeller) {
            API.addGrowItem({
                plant_name: this.state.plantName,
                variety: this.state.plantVariety,
                seed_seller: this.state.plantSeller,
            })
                .then((res) => this.loadItems())
                .catch((err) => console.log(err));
        }
        this.setState({
            plantkey: '',
            plantVariety: '',
            plantSeller: '',
        });
    };

    render() {
        return (
            <div className="sb-nav-fixed">
                <Nav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Seed Starting</h1>
                                <hr />
                                <div>
                                    <form className="form-inline">
                                        <Input 
                                        name="plantName" 
                                        value={this.state.plantName} 
                                        onChange={this.handleInputChange("plantName")}
                                        placeholder="Plant Name"
                                        className="formData form-control"
                                        />
                                        <Input 
                                        name="plantVariety" 
                                        value={this.state.plantVariety} 
                                        onChange={this.handleInputChange("plantVariety")} 
                                        placeholder="Plant Variety"
                                        className="formData form-control"
                                        />
                                        <Input 
                                        name="plantSeller" 
                                        value={this.state.plantSeller} 
                                        onChange={this.handleInputChange("plantSeller")} 
                                        placeholder="Company"
                                        className="formData form-control"
                                        />
                                        <FormBtn
                                            disabled={!(this.state.plantName && this.state.plantSeller && this.state.plantVariety)}
                                            onClick={this.addItem}
                                            className="formData btn btn-primary mb-2"
                                            >
                                            Add 
                                            </FormBtn>
                                    </form>
                                </div>
                                <div>
                                    <DataGrid
                                        columns={columns}
                                        rows={this.state.Mylist}
                                    />
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

export default SeedStarting;