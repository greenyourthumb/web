import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


import TopNav from "../../../components/TopNav"
import SideNav from "../../../components/SideNav"
import Footer from "../../../components/Footer"

const IPM = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="sb-nav-fixed">
            <TopNav />
            <div id="layoutSidenav">
                <SideNav />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Insects, Pests & Disease Management</h1>
                            <hr />
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Insects & Pests
          </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Diseases
          </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="2">
                                            <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="2">
                                            <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="2">
                                            <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="2">
                                            <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="2">
                                            <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="2">
                                            <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col sm="6">
                                                <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                                </Card>
                                            </Col>
                                            <Col sm="6">
                                                <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                    <Button>Go somewhere</Button>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                            </TabContent>
                        </div>
                    </main>
                        <Footer />
                </div>
                </div>

            </div>

    );
}

export default IPM;
