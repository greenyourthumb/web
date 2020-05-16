
import React, { Component } from 'react'
import API from "../../Utils/API";


class ToDoList extends Component {
    constructor() {
        super()
        this.state = {
            myList: [{}],
        }
    }
    componentDidMount() {
        this.loadItems();
    }
    loadItems = () => {
        API.getMyReminders()
            .then((res) =>
                this.setState({
                    myList: res.data,
                })
            )
            .catch((err) => console.log(err));
    };
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark">Action Items</li>
                {this.state.myList.map((List, index) => (
                    <li className="list-group-item">{List.title}</li>
                )
                )}


            </ul>

        );
    }
}

export default ToDoList;
