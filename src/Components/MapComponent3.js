import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';
import {ACCESS_TOKEN} from "../Service";



class MapComponent3 extends Component {
    constructor(props) {
        super(props);
        const queryString = require('query-string');
        const params = queryString.parse(props.location.search);
        const id = params['id'];
        this.state = {destinations: {longitude: 0, latitude: 0}};
    }
    state = {destinations: []}

    componentDidMount() {
        fetch('/travelapp/destinations/' + this.state.id, {
            headers: {'Content-Type':'application/json', 'Authorization' : 'Bearer' + localStorage.getItem(ACCESS_TOKEN) },
            accept: 'application/json'
        })
            .then(function (response) {
                return response.json();

            })
            .then(function (json) {
                this.setState({destinations: json});

            }.bind(this));
    };


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
                Marker: new google.maps.Marker({
                    position: lokaatio,
                    map: map,
                })
            })


            var map = new maps.Map(node, mapConfig);
            var lokaatio = {lat: this.state.latitude, lng: this.state.longitude}        //tähän pitäisi saada haettua koordinaatit db:stä
            var marker;
            console.log(lokaatio);

            marker = new google.maps.Marker({
                position: lokaatio,
                map: map
            })
            console.log(lokaatio)
        }
        }
            render()
            {
                var markkeri = this.state.destinations;
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
export default MapComponent3;