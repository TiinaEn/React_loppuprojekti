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

                google.maps.event.addListener(marker, 'click', function() {
                   infoWindow.open(map, marker);
                });
            }

            /*var marker = new google.maps.Marker({
                position: {lat: 60.192059, lng: 24.945831},
                map: this.map,
                draggable:true,
                /!*icon: {
                    url: "https://www.freeiconspng.com/images/red-arrow-png"}*!/
                        });*/

            var infoWindow = new google.maps.InfoWindow({
                content: '<div>' +
                    '<table>' +
                    '<tr><td>Name:</td><td><input type="text" id="name"/></td></tr>'+
                    '<tr><td>Address:</td> <td><input type="text" id="address"/></td></tr>'+
                    '<tr><td>Type:</td><td><select id="type">' +
                    '<option value="Restaurant">Restaurant</option>'+
                    '<option value="Hotel">Hotel</option>'+
                    '<option value="Shop">Shop</option>'+
                    '<option value="Sight">Sight</option>'+
                '</select></td></tr>'+
                '<tr><td></td><td><input type="button" value="Save" onclick="saveData()"/></td></tr>'+
                '</table>'+
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


