import React from 'react'
import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"

import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const groups = [{ id: 1, title: 'Broccoli By Seed' }, { id: 2, title: 'Carrots By Seed' }, { id: 3, title: 'Pumpkin By Seed Or Transplant' }]

const items = [
    {
        id: 1,
        group: 1,
        title: 'Indoors',
        start_time: moment('2020-1-1'),
        end_time: moment('2020-1-1').add(3, 'M')
    },
    {
        id: 2,
        group: 2,
        title: 'Outdoors',
        start_time: moment('2020-2-15'),
        end_time: moment('2020-2-15').add(2, 'M')
    },
    {
        id: 3,
        group: 3,
        title: 'Outdoors',
        start_time: moment('2020-3-25'),
        end_time: moment('2020-3-25').add(2.5, 'M')
    }
]
function CropCal() {

    return (
        <div className="sb-nav-fixed">
            <Nav />
            <div id="layoutSidenav">
                <SideNav />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Crop Calendar</h1>
                            <hr />
                            <div>
                                <Timeline
                                    groups={groups}
                                    items={items}
                                    defaultTimeStart={moment().add(-1, 'M')}
                                    defaultTimeEnd={moment().add(1, 'M')}
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

export default CropCal;