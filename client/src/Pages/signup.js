import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from "react-router";

class Signup extends Component {
	constructor() {
		super()
		this.state = {
            first_name: '',
            last_name: '',
			user_email: '',
            user_pass: '',
            user_zip: '',
            isSignedUp: false // <-- initialize the signup state as false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/api/signup', {
            first_name: this.state.first_name,
			last_name: this.state.last_name,
			user_email: this.state.user_email,
            user_pass: this.state.user_pass,
            user_zip: this.state.user_zip
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
                        // redirectTo: '/login'
                        isSignedUp: true 
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

            })
            
	}
    render() {
        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Redirect to = {{ pathname: "/login" }} />;
          }
        return (
                <div className="bg-auth">
                    <div id="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7">
                                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                                <div className="card-body">
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="col-md-6">
                                                                <div className="form-group"><label className="small mb-1" for="inputFirstName">First Name</label>
                                                                    <input className="form-control py-4"
                                                                        name="first_name" 
                                                                        type="text" 
                                                                        id="inputFirstName"
                                                                        placeholder="Enter first name"
                                                                        value={this.state.first_name}
                                                                        onChange={this.handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group"><label className="small mb-1" for="inputLastName">Last Name</label>
                                                                    <input className="form-control py-4"
                                                                        name="last_name" 
                                                                        type="text" 
                                                                        id="inputLastName"
                                                                        placeholder="Enter last name"
                                                                        value={this.state.last_name}
                                                                        onChange={this.handleChange}
                                                                    />                                                                </div>
                                                                </div>
                                                        </div>
                                                        <div className="form-group"><label className="small mb-1" for="inputEmailAddress">Email</label>
                                                            <input className="form-control py-4" 
                                                                id="user_email" 
                                                                name="user_email" 
                                                                type="email" 
                                                                aria-describedby="emailHelp" 
                                                                placeholder="Enter email address"
                                                                value={this.state.user_email}
                                                                onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col-md-6">
                                                                <div className="form-group"><label className="small mb-1" for="inputPassword">Password</label>
                                                                    <input className="form-control py-4" 
                                                                        id="password" 
                                                                        type="password" 
                                                                        name="user_pass"
                                                                        placeholder="Enter password" 
                                                                        value={this.state.user_pass}
                                                                        onChange={this.handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group"><label className="small mb-1" for="inputConfirmPassword">Confirm Password</label><input className="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group"><label className="small mb-1" for="inputZipCode">ZIP Code</label>
                                                            <input className="form-control py-4" 
                                                                id="user_zip" 
                                                                name="user_zip" 
                                                                type="text" 
                                                                aria-describedby="inputZipCode" 
                                                                placeholder="Enter ZIP Code"
                                                                value={this.state.user_zip}
                                                                onChange={this.handleChange} />
                                                        </div>
                                                        <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Create Account</button></div>
                                                    </form>
                                                </div>
                                                <div className="card-footer text-center">
                                                    <div className="small"><a href="/login">Have an account? Go to login</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div id="layoutAuthentication_footer">
                            <footer className="py-4 bg-light mt-auto">
                                <div className="container-fluid">
                                    <div className="d-flex align-items-center justify-content-between small">
                                        <div className="text-muted">Copyright &copy; Your Website 2019</div>
                                        <div>
                                            <a href="/">Privacy Policy</a>
                                    &middot;
                                    <a href="/">Terms &amp; Conditions</a>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
        );
    
    }
}

    
export default Signup;