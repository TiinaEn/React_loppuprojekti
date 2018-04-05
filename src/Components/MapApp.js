import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapComponent from "./MapComponent"
import MapAutocomplete from "./MapAutocomplete";


class MapApp extends Component {
    render() {
        return (
            <div className="MapApp">
                <MapComponent google={this.props.google}/>
                <MapAutocomplete/>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZEa7IBzFg2qOA5xgGRzlDab9zyDnptKs',
})(MapApp)
