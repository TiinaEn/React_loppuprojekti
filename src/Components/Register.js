import React, {Component} from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {value: ''},
            username: { value : ''},
            email : {value: ''},
            password: {value: ''}

        }
    }

    render() {
        return (
            <div>
                <div>

                    <form onSubmit={this.handleSignUp}>
                        <div class="form-group">
                            <label for="RegistrationForm">Name</label>
                            <input type="text" class="form-control" id="RegistrationForm"/>
                        </div>
                        <div class="form-group">
                            <label for="RegistrationForm">Username</label>
                            <input type="text" class="form-control" id="RegistrationForm"/>
                        </div>
                        <div class="form-group">
                            <label for="RegistrationForm">Email</label>
                            <input type="email" class="form-control" id="RegistrationForm"/>
                        </div>
                        <div class="form-group">
                            <label for="RegistrationForm">Password</label>
                            <input type="password" class="form-control" id="RegistrationForm"/>
                        </div>
                        {/*<div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>*/}
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;