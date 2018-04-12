import React, {Component} from 'react';
import {signup} from '../Service';
import {notification} from 'antd';

import '../Register.css';


import {Button, Form} from 'react-bootstrap';

/*
import {Form, FormGroup, ControlLabel, FormControl, Button, Label, Input, FormText, Container, Row, Col} from 'react-bootstrap'
*/

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {value: ''},
            username: {value: ''},
            email: {value: ''},
            password: {value: '', isValid: true, message: ''},
            confirmPassword: {value: ''}

        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
 //       validatePassword();
    }
    handlePasswordConChange = event => {
        this.setState({
            confirmPassword: event.target.value
        });
    }
   /* validatePassword = () => {
        var state = this.state.password.value
        if (state.length<6) {
            state.password.isValid = false;
            state.password.message = 'Password has to be at least six characters long.'

            this.setState( {
                password {}
            })
        }
    }*/


    handleSignUp = event => {
        event.preventDefault();
        const signupRequest = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };
        console.log("Register.signup", signupRequest);
        signup(signupRequest)
            .then(response => {
                notification.success({
                 //   message: 'Hei vaan',
                    description: "Thank you! You're successfully registered. Please Login to continue!",
                });
                this.props.history.push("/login");
            }).catch(error => {
            notification.error({
              //  message: 'Hei vaan',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }

    validateForm() {
        return (
            this.state.name.length > 0 &&
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }


    render() {
        return (
            <div className="parent-container">
            <div className="">
                <h3>Registration</h3>

                <form class="form-horizontal" onSubmit={this.handleSignUp}>
                    <div className="form-group" value={this.state.name} onChange={this.handleNameChange}>
                        <label htmlFor="RegistrationForm" class="control-label col-sm-4">Name</label>
                        <div class="col-sm-4">
                        <input type="text" className="form-control"/>
                        </div>
                        </div>
                    <div className="form-group" value={this.state.username} onChange={this.handleUsernameChange}>
                        <label htmlFor="RegistrationForm" class="control-label col-sm-4">Username</label>
                        <div class="col-sm-4">
                        <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group" value={this.state.email} onChange={this.handleEmailChange}>
                        <label htmlFor="RegistrationForm" class="control-label col-sm-4">Email</label>
                        <div class="col-sm-4">
                        <input type="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group" value={this.state.password} onChange={this.handlePasswordChange}>
                        <label htmlFor="RegistrationForm" class="control-label col-sm-4">Password</label>
                        <div class="col-sm-4">
                        <input type="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group" value={this.state.confirmPassword} onChange={this.handlePasswordConChange}>
                        <label htmlFor="RegistrationForm" class="control-label col-sm-4">Confirm password</label>
                        <div class="col-sm-4">
                        <input type="password" className="form-control"/>
                        </div>
                    </div>
                    <Button
                        type="submit"
                         disabled={!this.validateForm()}
                    >Submit
                    </Button>
                </form>
            </div>
            </div>

        )
    }
}

export default Register;