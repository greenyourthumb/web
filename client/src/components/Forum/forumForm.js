import React from "react";

function Form() {
    return (
        <div className="col-md-4">
            <h3>Start A New Forum</h3>                                    <form>
                <div className="form-group">
                    <label >Title</label>
                    <input type="email" className="form-control" placeholder="What is this forum about?" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">A Brief Summary</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="email" className="form-control" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>

            </form>
        </div>

    )
}

export default Form;