import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import input from "eslint-plugin-jsx-a11y/src/util/implicitRoles/input";


class MapComponent2 extends Component {

   /* state = {
        locations: [
            {name: "New York County Supreme Court", location: {lat: 40.7143033, lng: -74.0036919} }
        ]
    }*/
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


            var map = new maps.Map(node, mapConfig);        //presenting a map on our site
            var marker;

/*            this.state.locations.forEach((location =>
            marker = new google.maps.Marker({
                position: {getLatLng},
                map: map,
                title: ''
            })*/

            map.addListener('click', function(event) {      //function for adding a marker on a map
                placeMarker(event.latLng, map);
            })

            function placeMarker(latLng, map) {
                marker = new google.maps.Marker({
                    position: latLng,
                    map: map
                });
                map.panTo(latLng);



                google.maps.event.addListener(marker, 'click', function() {
                   infoWindow.open(map, marker);    //presenting an infowindow when double clicking the marker
                });

            }

            var infoWindow = new google.maps.InfoWindow({   //field for searching a place
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

            /*var messageWindow = new google.maps.InfoWindow({
               content: '<div>Location saved</div>'
            });
            });*/
        }
        }



    constructor(props) {
        super(props)
        this.state = { address: '' }
        this.onChange = (address) => this.setState({ address })
    }

   /* var latlong;*/
   /* handleFormSubmit = (event) => {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))

            .then(latLng => console.log('success', /!*latlong = *!/latLng))
            .catch(error => console.error('Error', error))
    }*/
    handleFormSubmit = (event) => {
        event.preventDefault()
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
        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => new google.maps.Marker({
                position: latLng,
                map: map}))

    .catch(error => console.error('Error', error))
    }


/*    var sijainti = new google.maps.Marker({
        position: {lat: latlong.lat, lng: latlong.lng}, // sets position of marker to specified location
        map: map, // sets markers to appear on the map we just created on line 35
        title: "" // the title of the marker is set to the name of the location
    });
    sijainti.addListener('click', handleFormSubmit);*/

    render() {

        const style = {
            width: '100vw',
            height: '50vh'
        }
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            /*type: 'search',*/
            placeholder: 'Search places'
        }

        return (
            <div>
            <div ref="map" style={style}>
                loading map...
            </div>
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete inputProps={inputProps} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZEa7IBzFg2qOA5xgGRzlDab9zyDnptKs',
})(MapComponent2)


