import React, {Component} from 'react';
// import {createEntry} from "../Service";
import '../App.css';
import '../Note.css';
import userimg from '../userimg.png'


class Profile extends Component {
    // constructor(props) {
    //     super(props);
    //     {
    //         this.state = {username: '', email: '', password: ''}
    //     }
    // }
    //
    // goBackToHome = () => {
    //     this.props.history.push("/");
    // }
    //
    // handleUsernameChange = (e) => {
    //     this.setState({username: e.target.value})
    // }
    // handleEmailChange = (e) => {
    //     this.setState({email: e.target.value})
    // }
    // handlePasswordChange = (e) => {
    //     this.setState({password: e.target.value})
    // }
    // handleCreateClick = (e) => {
    //     e.preventDefault();
    //
    //     createEntry(this.state, (function (){this.goBackToHome()}).bind(this));
    //     this.setState({username: '', email: '', password:''})
    // }

    render() {
        return (
            <div className="Profile">

                <h1>My Profile</h1>
                <br/>
                <img style={{width: '15%',}} src={userimg}/>
                <br/>
                <br/>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-xs-2">Username: </label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-2">Email: </label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-2">Password: </label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                </form>
                {/*<form>Description:  <input type="text" value="I love to travel"/></form>*/}
                {/*<form action="">Add Friends</form>*/}
                {/*<div>List Friends</div>*/}
                <br/>

                <input className="btn btn-link" type="submit" value="Save Changes"/>
                <input type="submit" value="Save Changes"/>
                {/*<input type="submit" value="Save Changes" onClick={this.handleCreateClick}/>*/}



            </div>
        );
    }
}

export default Profile;