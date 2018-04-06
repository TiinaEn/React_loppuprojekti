import React, { Component } from 'react';

import '../App.css';
import '../Profile.css';
import userimg from '../userimg.png'


class Profile extends Component {
    render() {
        return (
            <div className="Profile">

                <h1>My Profile</h1>
                <br/>
                <img style={{width: '15%',}} src={userimg}/>
                {/*<div>Username</div>*/}
                {/*<form action="">Email</form>*/}
                {/*<form action="">Password</form>*/}
                {/*<form action="">Description</form>*/}
                {/*<form action="">Add Friends</form>*/}
                {/*<div>List Friends</div>*/}


            </div>
        );
    }
}

export default Profile;