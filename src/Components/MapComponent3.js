import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';



class MapComponent3 extends Component {



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
            var lokaatio = {}
            var tallennettu = {}
            var marker;


            marker = new google.maps.Marker({
                position: lokaatio,
                map: map
            })
            console.log(lokaatio)
        }
        }
            render()
            {
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