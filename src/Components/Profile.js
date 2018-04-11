import React, { Component } from 'react';

import '../App.css';
import '../Note.css';
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
                <form className= "form-horizontal">
                    <div className= "form-group">
                    <label className="control-label col-xs-2">Username: </label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" value="Heidi"/>
                    </div>
                </div>
                    <div className= "form-group">
                        <label className="control-label col-xs-2">Email: </label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" value="heidi@heidi.fi"/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label className="control-label col-xs-2">Password: </label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" value="*********"/>
                        </div>
                    </div>
                   </form>
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