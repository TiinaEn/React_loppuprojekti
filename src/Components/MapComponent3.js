import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ACCESS_TOKEN} from "../Service";

//Fetching coordinates for the current destination and showing a marker on a map based on these coordinates.

class MapComponent3 extends Component {
    constructor(props) {
        super(props);
        const queryString = require('query-string');
        const params = queryString.parse(props.location.search);
        const id = params['id'];
        this.state = {destinations: {}, id: id};
    }

    componentDidMount() {
        fetch('/travelapp/destinations/' + this.state.id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem(ACCESS_TOKEN)
            },
            accept: 'application/json'
        })
            .then(function (response) {
                return response.json();

            })
            .then(function (json) {
                this.setMarker(json);
                this.setState({destinations: json});
            }.bind(this));
        this.loadMap();
    }

    setMarker = (destination) => {
        const {google} = this.props;
        const maps = google.maps;
        var lokaatio2 = {lat: destination.latitude, lng: destination.longitude}
        var marker;
        console.log(lokaatio2);
        marker = new google.maps.Marker({
            position: lokaatio2,
            title: destination.name
        });
        marker.setMap(this.state.map);
    }

    loadMap() {
        if (this.props.google) {
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            const mapConfig = Object.assign({}, {
                center: {lat: 60, lng: 25},
                zoom:3,
                mapTypeId: 'roadmap',
            })

            var map = new maps.Map(node, mapConfig);
            this.setState({map: map});
        }
    }

    render() {


        const style = {
            width: '100vw',
            height: '100vh'
        }


        return (
            <div ref="map" style={style}>
                loading map...
            </div>
        )
    }
}

export default MapComponent3;