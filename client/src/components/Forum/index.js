import React from "react";

function Forum() {
    return (
            <div className="row">
                <div className="main--content col-md-8 pb--60" data-trigger="stickyScroll">
                    <div className="main--content-inner drop--shadow">
                        <div className="topics--list">
                            <table className="table">
                                <thead className="ff--primary fs--14 text-darkest">
                                    <tr>
                                        <th>Forum</th>
                                        <th>Topics</th>
                                        <th>Post</th>
                                        <th>Frieshness</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <h4 className="h6 fw--500 text-darkest"><a href="/topics" className="btn-link">User Interface Design</a></h4>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">12</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">49</p>
                                        </td>
                                        <td>
                                            <p>2 days, 5 hours ago</p>

                                            <a href="member-activity-personal.html" className="topic--author">
                                                <span className="name">David J. Kleiner</span>
                                                <span className="avatar"><img src="img/topics-img/avatar-01.jpg" alt="" /></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="h6 fw--500 text-darkest"><a href="/topics" className="btn-link">Front-End Engineering</a></h4>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>

                                            <ul className="subforums nav mt--10 text-darkest">
                                                <li><i className="fa fa-circle-thin mr--10 text-primary"></i></li>
                                                <li><a href="topics.html">HTML (12, 245)</a></li>
                                                <li><a href="topics.html">CSS (21, 108)</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">07</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">12</p>
                                        </td>
                                        <td>
                                            <p>2 days, 5 hours ago</p>

                                            <a href="member-activity-personal.html" className="topic--author">
                                                <span className="name">Karen S. Barker</span>
                                                <span className="avatar"><img src="img/topics-img/avatar-02.jpg" alt="" /></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="h6 fw--500 text-darkest"><a href="/topics" className="btn-link">Web Development</a></h4>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">05</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">42</p>
                                        </td>
                                        <td>
                                            <p>2 days, 5 hours ago</p>

                                            <a href="member-activity-personal.html" className="topic--author">
                                                <span className="name">Stuart B. Figueroa</span>
                                                <span className="avatar"><img src="img/topics-img/avatar-03.jpg" alt="" /></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="h6 fw--500 text-darkest"><a href="/topics" className="btn-link">Social Media Marketing</a></h4>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">10</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">50</p>
                                        </td>
                                        <td>
                                            <p>2 days, 5 hours ago</p>

                                            <a href="member-activity-personal.html" className="topic--author">
                                                <span className="name">Cathy T. Frazier</span>
                                                <span className="avatar"><img src="img/topics-img/avatar-04.jpg" alt="" /></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="h6 fw--500 text-darkest"><a href="/topics" className="btn-link">Content Marketing</a></h4>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry standard dummy text.</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">10</p>
                                        </td>
                                        <td>
                                            <p className="ff--primary fw--500 fs--14 text-darkest">50</p>
                                        </td>
                                        <td>
                                            <p>2 days, 5 hours ago</p>

                                            <a href="member-activity-personal.html" className="topic--author">
                                                <span className="name">Jane Doe</span>
                                                <span className="avatar"><img src="img/topics-img/avatar-05.jpg" alt="" /></span>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Forum;
