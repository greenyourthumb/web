
import React, { Component } from 'react'
// import API from "../../Utils/API";


class Budget extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         myBudget: [{}],
    //     }
    // }
    // componentDidMount() {
    //     this.loadItems();
    // }
    // loadItems = () => {
    //     API.getMyBudget()
    //         .then((res) =>
    //             this.setState({
    //                 myList: res.data,
    //             })
    //         )
    //         .catch((err) => console.log(err));
    // };
    render() {
        return (
            
            <div>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark">Budget Snapshot</li>
                </ul>
                <h3>New Feature Coming Soon</h3>
            </div>
        );
    }
}

export default Budget;
