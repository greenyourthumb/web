import React from "react";

function Avatar(props) {
    return (
        <div className="sb-sidenav-footer" style={{backgroundColor: "#101F2B"}}>

        <div className="small">Logged in as:</div>{props.children}
        </div>
    )

}

export default Avatar;