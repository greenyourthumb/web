import React from "react";

function Forum({ children }) {
    return (
            <div className="main--content col-md-8 pb--60" data-trigger="stickyScroll">
                <div className="main--content-inner drop--shadow">
                    <div className="topics--list">
                        <table className="table">
                            <thead className="ff--primary fs--15 text-darkest">
                                <tr>
                                    <th>Forum</th>
                                    <th>Topics</th>
                                    <th>Posts</th>
                                    <th>By</th>
                                    <th>Created On</th>
                                </tr>
                            </thead>

                            <tbody>
                                {children}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        

    )
}

export default Forum;
