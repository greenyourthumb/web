import React from "react";
import "./styles.css";
import "./css/fa.css";

function PeopleList({ children }) {
  return (

    <div className="member--items">
      <div className="row gutter--15 AdjustRow">
          {children}
      </div>
    </div>



  )
}

export default PeopleList;
