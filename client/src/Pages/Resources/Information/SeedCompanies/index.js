import React from "react";

import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"

import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

const columns = [
    { key: 'name', name: 'Name' },
    { key: 'address', name: 'Address' },
    { key: 'zip', name: 'ZIP' },
    { key: 'hours', name: 'Business Hours' },
    { key: 'phone', name: 'Phone' },
    { key: 'website', name: 'Website' },
    { key: 'google_rating', name: 'Google Rating' }
];
						
const rows = [
    { name: 'Baker Creek Heirloom Seed Company', address: '2278 Baker Creek Rd, Mansfield, MO', 'zip': '65704', hours: 'S-F 8AM-4PM S Closed', phone: '(417) 924-8917', website: 'https://www.rareseeds.com/', google_rating: '4.7' },
    { name: 'The Tasteful Garden', address: '895 Co Rd 8, Heflin, Alabama', 'zip': '36246', hours: 'M-F 9AM-4PM SS Closed', phone: '256-403-3413', website: 'https://www.tastefulgarden.com', google_rating: '3.6' }
];
				
function SeedCompanies() {
    return (
        <>
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
                                    rows={rows}
                                />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
        </>

    );
}

export default SeedCompanies;
