import React, { Component } from "react";
import { storage } from '../../firebase';

import "./css/style.css";

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            // progress: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));

        }
    }
    handleUpload = e => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progress function
                // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // this.setState({progress})
            },
            (error) => {
                console.log(error);
            },
            () => {
                //complete status function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                })
            });

    }
    render() {
        return (
            <div>
                <img src={this.state.url || "//placehold.it/150"} width="150" height="150" className="mx-auto img-fluid img-circle d-block" alt="avatar" /><br/>
                <input type="file" onChange={this.handleChange} size="100"/>
                <button onClick={this.handleUpload}>Upload</button>
                {/* <progress value={this.state.progress} max="100" /> */}
            </div>
        )
    }

}



export default ImageUpload;
