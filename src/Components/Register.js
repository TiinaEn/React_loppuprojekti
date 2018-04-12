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
            password: {value: ''},
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
    }
    handlePasswordConChange = event => {
        this.setState({
            confirmPassword: event.target.value
        });
    }


    handleSignUp = event => {
        event.preventDefault();
        const signupRequest = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };
        signup(signupRequest)
            .then(response => {
                notification.success({
                    message: 'Hei vaan',
                    description: "Thank you! You're successfully registered. Please Login to continue!",
                });
                this.props.history.push("travelapp/login");
            }).catch(error => {
            notification.error({
                message: 'Hei vaan',
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

            <div className="container">

               {/* <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={4}>
                            <FormControl value={this.state.name} onChange={this.handleNameChange} type="text"  />
                        </Col>
                    </FormGroup>
                </Form>*/}

                <Form className="lomake" onSubmit={this.handleSignUp}>
                    <div className="form-group" value={this.state.name} onChange={this.handleNameChange}>
                        <label htmlFor="RegistrationForm">Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.username} onChange={this.handleUsernameChange}>
                        <label htmlFor="RegistrationForm">Username</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.email} onChange={this.handleEmailChange}>
                        <label htmlFor="RegistrationForm">Email</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.password} onChange={this.handlePasswordChange}>
                        <label htmlFor="RegistrationForm">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.confirmPassword} onChange={this.handlePasswordConChange}>
                        <label htmlFor="RegistrationForm">Confirm password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <Button
                        type="submit"
                        //   onClick={this.handleSignUp}
                        disabled={!this.validateForm()}
                    >Submit
                    </Button>
                </Form>
            </div>
            </div>
           /* <div>

                <form onSubmit={this.handleSignUp}>
                    <div className="form-group" value={this.state.name} onChange={this.handleNameChange}>
                        <label htmlFor="RegistrationForm">Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.username} onChange={this.handleUsernameChange}>
                        <label htmlFor="RegistrationForm">Username</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.email} onChange={this.handleEmailChange}>
                        <label htmlFor="RegistrationForm">Email</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.password} onChange={this.handlePasswordChange}>
                        <label htmlFor="RegistrationForm">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group" value={this.state.confirmPassword} onChange={this.handlePasswordConChange}>
                        <label htmlFor="RegistrationForm">Confirm password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <Button
                        type="submit"
                        //   onClick={this.handleSignUp}
                         disabled={!this.validateForm()}
                    >Submit
                    </Button>
                </form>
            </div>*/


        )
    }
}

export default Register;