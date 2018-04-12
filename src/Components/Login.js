import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, ButtonGroup, Button, FormControl, HelpBlock} from 'react-bootstrap';
import {notification} from 'antd';
import {login} from '../Service';
import {ACCESS_TOKEN} from '../Service'
import {getCurrentUser} from '../helpers/LoginHelper';
import {Link} from 'react-router-dom';
import '../App.css';
import {sigin, signin} from "../Service";
import Register from "./Register";
import {Router, Switch, Route} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameOrEmail: '',
            password: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
     //       [event.target.id]: event.target.value
            usernameOrEmail: event.target.value
        });
    }
    handlePasswordChange = event => {
        this.setState({
            //       [event.target.id]: event.target.value
            password: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();

        const loginRequest = {
            usernameOrEmail: this.state.usernameOrEmail,
            password: this.state.password
        }
        signin(loginRequest)
            .then(response => {
                console.log("Signin", response);
                localStorage.setItem(ACCESS_TOKEN, response.accessToken)
                notification.success({
                    description: "You're successfully logged in!"
                });
                let user;
                getCurrentUser().then(function(current){
                    user=current;
                    console.dir(user);
                    this.props.history.push("/");
                }.bind(this));
            }).catch(error => {
            notification.error({
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });

    }
    validateForm() {
        return this.state.usernameOrEmail.length >0 && this.state.password.length >0
    }



    render() {


        <Switch>
            <Route exact path="/register" component={Register}/>
            <Route component={Login}/>
        </Switch>


        return (
            <div>
            <div className="Login">

                <h3> Sign in</h3>


                <form class="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group" value={this.state.usernameOrEmail} onChange={this.handleUsernameChange}>
                        <label htmlFor="usernameOrEmail" class="control-label col-sm-4">Username</label>
                        <div class="col-sm-4">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group" value={this.state.password} onChange={this.handlePasswordChange}>
                        <label htmlFor="usernameOrEmail" class="control-label col-sm-4">Password</label>
                            <div class="col-sm-4">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>

                {/*<form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="usernameOrEmail">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.usernameOrEmail}
                        onChange={this.handleUsernameChange}
                    />
                </FormGroup>*/}
                 {/*   <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            type="password"
                        />
                    </FormGroup>*/}
                    <Button
                        type="submit"
                //        onClick={this.handleSubmit()}
                        disabled={!this.validateForm()}
                    >Submit
                    </Button>
                </form>
                <br/>
                <h4>Are you not registered yet? Register <Link to={"/register"}>HERE</Link></h4>

            </div>
            </div>
        );
    }
}

export default Login;

