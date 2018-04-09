import React, {Component} from 'react';

class Register extends Component {

    render() {
        return (
            <div>
                <div>

                    <form>
                        <div class="form-group">
                            <label for="RegistrationForm">Username</label>
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