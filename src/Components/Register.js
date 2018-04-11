import React, {Component} from 'react';
import {signup} from '../serviceclient';
import {notification} from 'antd';
import {Button} from 'react-bootstrap';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {value: ''},
            username: {value: ''},
            email: {value: ''},
            password: {value: ''}

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


    render() {
        return (
            <div>

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
                        <Button
                            type="submit"
                         //   onClick={this.handleSignUp}
                            /* disabled={!this.validateForm()}*/
                        >Submit
                        </Button>
                    </form>
            </div>
        )
    }
}

export default Register;