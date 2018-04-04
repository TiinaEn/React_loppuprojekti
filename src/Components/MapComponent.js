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

            var map = new maps.Map(node, mapConfig);


            map.addListener('click', function(event) {
                placeMarker(event.latLng, map);
            })
            function placeMarker(latLng, map) {
               var marker = new google.maps.Marker({
                    position: latLng,
                    map: map
                });
                map.panTo(latLng);


        }}
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


