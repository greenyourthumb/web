import React from "react";

function Topic({ children }) {
    return (
            <div className="main--content col-md-8 pb--60" data-trigger="stickyScroll">
                <div className="main--content-inner drop--shadow">
                    <div className="topics--list">
                        <table className="table">
                            <thead className="ff--primary fs--14 text-darkest">
                                <tr>
                                    <th>Topics</th>
                                    <th>Members</th>
                                    <th>Posts</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>

                            <tbody>
                                
                                
                            {children}
                                
                                
                            </tbody>
                        </table>
                    </div>

                </div>
        </div>

    );
}

export default Topic;
