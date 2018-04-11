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
                <br/>
                <br/>
                <form>Username:  <input type="text" value="Heidi"/></form>
                <form>Email:  <input type="text" value="heidi@heidi.fi"/></form>
                <form>Password:  <input type="text" value="*********"/></form>
                {/*<form>Description:  <input type="text" value="I love to travel"/></form>*/}
                {/*<form action="">Add Friends</form>*/}
                {/*<div>List Friends</div>*/}
                <br/>
                <input type="submit" value="Save Changes"/>


            </div>
        );
    }
}

export default Profile;