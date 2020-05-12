import React, { Component } from 'react'
import Topic from "../../../../components/Forum/Topic"
import Nav from "../../../../components/Nav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"
import moment from 'moment';
import { Input, FormBtn, TextArea } from "../../../../components/Form";
import API from "../../../../Utils/API";

class Topics extends Component {
    constructor() {
        super()
        this.state = {
            topics: [{}],
            title: "",
            summary: "",
            created_by: "",
        }
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getTopics()
            .then((res) =>
                this.setState({
                    topics: res.data,
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
        if (this.state.title && this.state.summary) {
            API.createTopic({
                title: this.state.title,
                summary: this.state.summary,
                created_by: this.state.created_by,
            })
                .then((res) => this.loadItems())
                .catch((err) => console.log(err));
        }
        this.setState({
            title: '',
            summary: '',
            created_by: '',
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
                                <h1 className="mt-4">Topics</h1>
                                <hr />
                                <div className="row">

                                    <Topic>
                                        {this.state.topics.map((topic, index) => (
                                            <tr>
                                                <td>
                                                    <h4 className="h6 fw--500 text-darkest"><a href="/posts" className="btn-link">{topic.title}</a></h4>
                                                    <p>{topic.summary}</p>
                                                    <br />
                                                    <p>Started by <a href="member-activity-personal.html">{topic.created_by}</a> in <a href="#">sports</a> forum</p>
                                                </td>
                                                <td>
                                                    <p className="ff--primary fw--500 fs--14 text-darkest">{topic.members_count}</p>
                                                </td>
                                                <td>
                                                    <p className="ff--primary fw--500 fs--14 text-darkest">{topic.posts_count}</p>
                                                </td>
                                                <td>
                                                    <p>{moment(topic.created_at).format("MMM Do YYYY")}</p>
                                                </td>
                                            </tr>
                                            )
                                        )}

                                    </Topic>
                                    <div className="col-md-4">
                                        <h3>Start A Discussion</h3>    <br />
                                        <form>
                                            <label >Title</label>
                                            <Input
                                                value={this.state.title}
                                                onChange={this.handleInputChange("title")}
                                                name="title"
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
                                                    !(this.state.title && this.state.summary)
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

export default Topics;