import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom'


class MapComponent extends Component {
    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            const mapConfig = Object.assign({}, {
                center: {lat: 60, lng: 25},
                zoom: 5,
                mapTypeId: 'roadmap'
            })
            this.map = new maps.Map(node, mapConfig);

            var marker = new google.maps.Marker({
                position: {lat: 60.192059, lng: 24.945831},
                map: this.map,
                icon: {
                    url: "https://www.freeiconspng.com/images/red-arrow-png"}
                        });

        }
    }

    render() {
        const style = {
            width: '100vw',
            height: '75vh'
        }

        return (
            <div ref="map" style={style}>
                loading map...
            </div>
        )
    }
}
export default MapComponent;


