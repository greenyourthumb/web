import React from "react";
import "./style.css";

function Post({ children }) {
    return (
            <div className="main--content col-md-8 pb--60" data-trigger="stickyScroll">
                        <div className="main--content-inner drop--shadow">
                            
                            <div className="forum--header pb--50">
                                <div className="forum--subtitle ff--primary fs--14 text-darker">
                                    <p>Top posts</p>
                                </div>
                            </div>
                            

                            <div className="topic--replies">
                                <ul className="nav list-group list-group-flush">
                                    {children}
                                </ul>
                            </div>


                        </div>

     
                    </div>


    );
}

export default Post;
