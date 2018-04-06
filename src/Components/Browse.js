import React, { Component } from 'react';

import '../App.css';

class Browse extends Component {
//     state = {destinations: []};
//
//     componentDidMount() {
//         fetch('/travelapp/destinations')
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (json) {
//                 this.setState({destinations: json});
//             }.bind(this));
//
//     }
//
    render() {
//         var destination = this.state.destinations.map(function (destination) {
//             return <p key={destination.id}>{destination.country} {destination.city}</p>
//         });
        return (
            <div className="Browse">

                <h1>Destinations</h1>
               {/*{destination}*/}
            </div>
        );
    }
}

export default Browse;