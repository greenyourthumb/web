import React, { Component } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'
//import { response } from 'express'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            user_email: '',
            user_pass: '',
            isloggedIn: false,
            firstname: '',
            zipcode: ''
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
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/api/user/login', {
                user_email: this.state.user_email,
                user_pass: this.state.user_pass
            })
            .then(response => {
                console.log('login response: ')
                // console.log(response)
                if (response.status === 200) {                    
                    // update the state to redirect to home
                    console.log(response);
                    this.setState({
                        isloggedIn: true,
                        firstname: response.data.firstName,
                        zipcode: response.data.zipCode
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.isloggedIn) {
            return <Redirect to={{ pathname: "/mygreenzone",
                                   state: { firstname: this.state.firstname,
                                            zipcode: this.state.zipcode
                                        } 
                                }} 
                    />
        } 
        else {
            return (
                <div className="bg-auth">
                    <div id="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-5">
                                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                                <div className="card-body">
                                                    <form>
                                                        <div className="form-group"><label className="small mb-1">Email</label>
                                                            <input className="form-control py-4"
                                                                type="text"
                                                                id="inputEmailAddress"
                                                                name="user_email"
                                                                placeholder="Enter email address"
                                                                value={this.state.user_email}
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-group"><label className="small mb-1">Password</label>
                                                            <input className="form-control py-4"
                                                                id="inputPassword"
                                                                type="password"
                                                                name="user_pass"
                                                                placeholder="Enter password"
                                                                value={this.state.user_pass}
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="custom-control custom-checkbox"><input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                                <label className="custom-control-label">Remember password</label></div>
                                                        </div>
                                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                            <a className="small" href="password.html">Forgot Password?</a>
                                                            <button className="btn btn-primary" onClick={this.handleSubmit} type="submit">Login</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer text-center">
                                                    <div className="small"><a href="/signup">Need an account? Sign up!</a></div>
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
            )
        }
    }
}

export default Login;