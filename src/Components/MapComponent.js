import React, {Component} from 'react';
/*import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';*/
import ReactDOM from 'react-dom'
import MapComponent2 from "./MapComponent2";
import CreateEntry from "./CreateEntry";


class MapComponent extends Component {
    constructor(props) {
        super(props);
        {this.state = {latitude: 0, longitude: 0}}
    }
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
                mapTypeId: 'roadmap',
                Marker: new google.maps.Marker ({
                    position: lokaatio,
                    map: map,
                })
            })



            var map = new maps.Map(node, mapConfig);
            var lokaatio = {lat: 61.31245, lng: 25.57854}

            var marker;


            marker = new google.maps.Marker ({
                position: lokaatio,
                map:map
            })
            console.log(lokaatio)


            var infoWindow = new google.maps.InfoWindow({
                content: '<div>' +
                '<table>' +
                '<tr><td>Name:</td><td><input type="text" id="name"/></td></tr>' +
                '<tr><td>Address:</td> <td><input type="text" id="address"/></td></tr>' +
                '<tr><td>Type:</td><td><select id="type">' +
                '<option value="Restaurant">Restaurant</option>' +
                '<option value="Hotel">Hotel</option>' +
                '<option value="Shop">Shop</option>' +
                '<option value="Sight">Sight</option>' +
                '</select></td></tr>' +
                '<tr><td></td><td><input type="button" value="Save" onclick="saveData()"/></td></tr>' +
                '</table>' +
                '</div>'
            });

            var messageWindow = new google.maps.InfoWindow({
                content: '<div>Location saved</div>'
            });

        }
    }

    render() {
        const style = {
            width: '100vw',
            height: '77vh'
        }


        return (
            <div ref="map" style={style}>
                loading map...


            </div>
        )
    }
}

export default MapComponent;


