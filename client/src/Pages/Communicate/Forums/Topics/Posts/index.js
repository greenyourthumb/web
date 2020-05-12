import React, { Component } from 'react'
import Post from "../../../../../components/Forum/Topic/Post"
import Nav from "../../../../../components/Nav"
import SideNav from "../../../../../components/SideNav"
import Footer from "../../../../../components/Footer"
import moment from 'moment';
import { Input, FormBtn, TextArea } from "../../../../../components/Form";
import API from "../../../../../Utils/API";

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{}],
            content: "",
            created_by: "",
        }
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getPosts()
            .then((res) =>
                this.setState({
                    posts: res.data,
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
        if (this.state.content && this.state.created_by) {
            API.createPost({
                content: this.state.content,
                created_by: this.state.created_by,
            })
                .then((res) => this.loadItems())
                .catch((err) => console.log(err));
        }
        this.setState({
            content: '',
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
                                <h1 className="mt-4">Posts</h1>
                                <hr />
                                <div className="row">

                                    <Post>
                                        {this.state.posts.map((post, index) => (
                                            <li className="list-group-item">
                                                <div className="topic--reply">
                                                    <div className="header clearfix">
                                                        <p className="date float--left">{moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                                        {/* <p className="link float--right"><a href="topic-replies.html#575">#575</a></p> */}
                                                    </div>

                                                    <div className="body clearfix">
                                                        <div className="author mr--20 float--left text-center">
                                                            <div className="avatar" data-overlay="0.3" data-overlay-color="primary">
                                                                <a href="member-activity-personal.html">
                                                                    <img src="img/topics-img/avatar-01.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="name text-darkest">
                                                                <p><a href="member-activity-personal.html">{post.created_by}</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="content pt--20 fs--14 ov--h">
                                                            <p>{post.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                        )}

                                    </Post>
                                    <div className="col-md-4">
                                        <h3>Post A Comment</h3>    <br />
                                        <form>
                                            <TextArea
                                                value={this.state.content}
                                                onChange={this.handleInputChange("content")}
                                                name="content"
                                            />
                                            <label>Your Name</label>
                                            <Input
                                                value={this.state.created_by}
                                                onChange={this.handleInputChange("created_by")}
                                                name="created_by"
                                            />
                                            <FormBtn
                                                disabled={
                                                    !(this.state.content && this.state.created_by)
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

export default Posts;