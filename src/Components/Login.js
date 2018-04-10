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
import {login} from '../serviceclient';


import '../App.css';
import {sigin, signin} from "../serviceclient";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
     //       [event.target.id]: event.target.value
            username: event.target.value
        });
    }
    handlePasswordChange = event => {
        this.setState({
            //       [event.target.id]: event.target.value
            password: event.target.value
        });
    }
    handleSubmit = event => {
   //     event.preventDefault();

        const loginRequest = {
            username: this.state.username,
            password: this.state.password
        }
        signin(loginRequest)
            .then(response => {
                notification.success({
                });
                this.props.history.push("/home");
            }).catch(error => {
            notification.error({
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });

    }
    validateForm() {
        return this.state.username.length >0 && this.state.password.length >0
    }


    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
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
                        onClick={this.handleSubmit()}
                        disabled={!this.validateForm()}
                    >
                    </Button>
                </form>


            </div>
        );
    }
}

export default Login;

