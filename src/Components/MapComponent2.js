import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

class MapComponent2 extends Component {

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
            var infoWindow;
            var messageWindow;


            map.addListener('click', function (event) {      //function for adding a marker on a map
                placeMarker(event.latLng, map);
            })

            function placeMarker(latLng, map) {
                marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                });
                map.panTo(latLng);


                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open(map, marker);    //presenting an infowindow when double clicking the marker
                });

            }

            infoWindow = new google.maps.InfoWindow({   //field for searching a place
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

            messageWindow = new google.maps.InfoWindow({
               content: '<div>Location saved</div>'
            });



        }
    }




    constructor(props) {
        super(props)
        this.state = {address: ''}
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const {google} = this.props;
        const maps = google.maps;
        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);
        const mapConfig = Object.assign({}, {
            zoom: 5,
            mapTypeId: 'roadmap'
        })

        var map = new maps.Map(node, mapConfig);    //adding marker pazed on search
        var marker;
        var infoWindow = new google.maps.InfoWindow({   //field for searching a place
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


        map.addListener('click', function (event) {      //function for adding a marker on a map
            placeMarker(event.latLng, map);
        })

        function placeMarker(latLng, map) {
            marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
            map.panTo(latLng);


            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);    //presenting an infowindow when double clicking the marker
            });

        }

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => new google.maps.Marker({
                map: map.panTo(latLng),
                position: latLng,
                map: map,
            }))
            .catch(error => console.error('Error', error)
            )
    }


    render() {

        const style = {
            width: '100vw',
            height: '50vh'
        }
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
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


