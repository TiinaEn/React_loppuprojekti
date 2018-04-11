/*

import React from 'react';

export default class Login extends React.Component {
    render(){return(
    <div>Login-komponentti</div>
)}}
*/



import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, ButtonGroup, Button, FormControl, HelpBlock} from 'react-bootstrap';
import {notification} from 'antd';
import {login} from '../Service';
import {ACCESS_TOKEN} from '../Service'


import '../App.css';
import {sigin, signin} from "../Service";

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
                localStorage.setItem(ACCESS_TOKEN, response.accessToken)
                notification.success({
                    description: "You're successfully logged in!"
                });
                this.props.history.push("travelapp/home");
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
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="usernameOrEmail">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.usernameOrEmail}
                            onChange={this.handleUsernameChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                //        onClick={this.handleSubmit()}
                        disabled={!this.validateForm()}
                    >Submit
                    </Button>
                </form>


            </div>
        );
    }
}

export default Login;

