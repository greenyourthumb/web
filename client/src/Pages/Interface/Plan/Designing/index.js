import React, { Component } from "react";
// import "./style.css";

import TopNav from "../../../../components/TopNav"
import SideNav from "../../../../components/SideNav"
import Footer from "../../../../components/Footer"
import CanvasDraw from "react-canvas-draw";

import "./style.css";

class Designing extends Component {
    state = {
        color: "#ffc600",
        width: 600,
        height: 600,
        brushRadius: 4,
        lazyRadius: 8
    };
    
    render() {
        return (


            <div className="sb-nav-fixed">
                <TopNav />
                <div id="layoutSidenav">
                    <SideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Design Studio</h1>
                                <hr />
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-secondary"
                                                    onClick={() => {
                                                        localStorage.setItem(
                                                            "savedDrawing",
                                                            this.saveableCanvas.getSaveData()
                                                        );
                                                    }}
                                                >Save</button>
                                                <button type="button" className="btn btn-secondary"
                                                    onClick={() => {
                                                        this.saveableCanvas.clear();
                                                    }}
                                                >Clear</button>
                                                <button type="button" className="btn btn-secondary"
                                                    onClick={() => {
                                                        this.saveableCanvas.undo();
                                                    }}
                                                >Undo</button>
                                            </div><br/>
                                            <CanvasDraw
                                                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                                                brushColor={this.state.color}
                                                brushRadius={this.state.brushRadius}
                                                lazyRadius={this.state.lazyRadius}
                                                canvasWidth={this.state.width}
                                                canvasHeight={this.state.height}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <div>
                                                <h3>Your Current Layout</h3>
                                            </div>
                                            <CanvasDraw
                                                disabled
                                                hideGrid
                                                ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
                                                saveData={localStorage.getItem("savedDrawing")}
                                                canvasWidth={this.state.width}
                                                canvasHeight={this.state.height}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        );
    }
}
export default Designing