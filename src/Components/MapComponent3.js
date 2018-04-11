import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';
import MapComponent2 from "./MapComponent2"


class MapComponent3 extends Component {
        render() {
            return (
                <div>{MapComponent2}</div>
            )
        }
}
export default MapComponent3;