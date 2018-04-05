
import React, { Component } from 'react';
import {/*Form,*/ FormGroup, ControlLabel, /*ButtonGroup,*/ Button, FormControl, /*HelpBlock*/} from 'react-bootstrap';


import '../App.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
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
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        disabled={!this.validateForm()}
                    >
                    </Button>
                </form>


            </div>
        );
    }
}

export default Login;
