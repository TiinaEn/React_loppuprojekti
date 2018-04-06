import React, { Component } from 'react';

import '../App.css';
import '../Frontpage.css';
import atlas from '../atlas.jpg'


class Frontpage extends Component {
    render() {
        return (
            <div className="Profile">

                <h1>My Travel Journal</h1>
                <br/>
                <img style={{width: '100%',}} src={atlas}/>
            </div>
        );
    }
}

export default Frontpage;