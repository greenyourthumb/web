import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            user_email: '',
            user_pass: '',
            redirectTo: null
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
            .post('/login', {
                user_email: this.state.user_email,
                user_pass: this.state.user_pass
            })
            .then(response => {
                console.log('login response: ')
                // console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.userName
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="bg-auth">
                    <div id="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="form-group"><label class="small mb-1" for="inputEmailAddress">Email</label>
                                                            <input class="form-control py-4"
                                                                type="text"
                                                                id="inputEmailAddress"
                                                                name="user_email"
                                                                placeholder="Enter email address"
                                                                value={this.state.user_email}
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                        <div class="form-group"><label class="small mb-1" for="inputPassword">Password</label>
                                                            <input class="form-control py-4"
                                                                id="inputPassword"
                                                                type="password"
                                                                name="user_pass"
                                                                placeholder="Enter password"
                                                                value={this.state.user_pass}
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="custom-control custom-checkbox"><input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                                <label class="custom-control-label" for="rememberPasswordCheck">Remember password</label></div>
                                                        </div>
                                                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                            <a class="small" href="password.html">Forgot Password?</a>
                                                            <button className="btn btn-primary" onClick={this.handleSubmit} type="submit">Login</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-footer text-center">
                                                    <div class="small"><a href="/signup">Need an account? Sign up!</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div id="layoutAuthentication_footer">
                            <footer class="py-4 bg-light mt-auto">
                                <div class="container-fluid">
                                    <div class="d-flex align-items-center justify-content-between small">
                                        <div class="text-muted">Copyright &copy; Your Website 2019</div>
                                        <div>
                                            <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
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