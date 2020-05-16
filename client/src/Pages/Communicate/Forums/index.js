import React, { Component } from "react";

import moment from 'moment';
import TopNav from "../../../components/TopNav"
import SideNav from "../../../components/SideNav"
import Footer from "../../../components/Footer"

import { Forum } from '../../../components/Forum'
import { Input, FormBtn, TextArea } from "../../../components/Form";

import API from "../../../Utils/API";


class Forums extends Component {

    constructor() {
        super()
        this.state = {
            forums: [{}],
            name: "",
            summary: "",
            created_by: "",
        }
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getForums()
            .then((res) =>
                this.setState({
                    forums: res.data,
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

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.name && this.state.summary) {
            API.createForums({
                name: this.state.name,
                summary: this.state.summary,
                created_by: this.state.created_by,
            })
                .then((res) => this.loadItems())
                .catch((err) => console.log(err));
        }
        this.setState({
            name: '',
            summary: '',
            created_by: '',
          });
    };
    render() {
        return (
            <div className="sb-nav-fixed">
                <TopNav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Forums</h1>
                                <hr />
                                <div className="row">

                                    <Forum>
                                        {this.state.forums.map((forum, index) => (
                                            <tr>
                                                <td>
                                                    <h4 className="h6 fw--500 text-darkest"><a href="/topics" className="btn-link">{forum.name}</a></h4>
                                                    <p>{forum.summary}</p>
                                                </td>
                                                <td>
                                                    <p className="ff--primary fw--500 fs--14 text-darkest">{forum.topics_count}</p>
                                                </td>
                                                <td>
                                                    <p className="ff--primary fw--500 fs--14 text-darkest">{forum.posts_count}</p>
                                                </td>
                                                <td>
                                                    <p className="ff--primary fw--500 fs--14 text-darkest">{forum.created_by}</p>
                                                </td>
                                                <td>
                                                    <p className="ff--primary fw--500 fs--14 text-darkest">{moment(forum.created_at).format("MMM Do YYYY")}</p>
                                                </td>
                                            </tr>

                                        )
                                        )}

                                    </Forum>
                                    <div className="col-md-4">
                                        <h3>Start A New Forum</h3>    <br />
                                        <form>
                                            <label >Title</label>
                                            <Input
                                                value={this.state.name}
                                                onChange={this.handleInputChange("name")}
                                                name="name"
                                                placeholder="What is this forum about?"
                                            />
                                            <label for="exampleFormControlTextarea1">A Brief Summary</label>
                                            <TextArea
                                                value={this.state.summary}
                                                onChange={this.handleInputChange("summary")}
                                                name="summary"
                                            />
                                            <label>Your Name</label>
                                            <Input
                                                value={this.state.created_by}
                                                onChange={this.handleInputChange("created_by")}
                                                name="created_by"
                                            />
                                            <FormBtn
                                                disabled={
                                                    !(this.state.name && this.state.summary)
                                                }
                                                onClick={this.handleFormSubmit}>
                                                Submit
							                </FormBtn>

                                        </form>
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

export default Forums;
