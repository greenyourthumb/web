import React, { Component } from "react";

import API from "../../../../Utils/API";

import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"

import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

const columns = [
    { key: 'name', name: 'Name', resizable: true },
    { key: 'address', name: 'Address', resizable: true},
    { key: 'zip', name: 'ZIP', sortable: true, width: 100},
    { key: 'hours', name: 'Business Hours' },
    { key: 'phone', name: 'Phone', width: 160 },
    { key: 'website', name: 'Website' },
    { key: 'google_rating', name: 'Google Rating', sortable: true, width: 140}
];

class SeedCompanies extends Component {
    constructor() {
        super()
	this.state = {
		items: [],
    }
}
	componentDidMount() {
		this.loadItems();
	}
	loadItems = () => {
		API.getItems()
			.then((res) =>
				this.setState({
					items: res.data,
				})
			)
			.catch((err) => console.log(err));
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
                                <h1 className="mt-4">Seed Companies</h1>
                                <hr />
                                <DataGrid
                                    columns={columns}
                                    rows={this.state.items}                                    
                                />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
		)
	}
}

export default SeedCompanies;
