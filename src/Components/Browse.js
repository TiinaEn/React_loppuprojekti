import React, { Component } from 'react';
import {fetchall} from "../ServiceClient";

import '../App.css';
import CountryList from "./CountryList";
import CityList from "./CityList";

class Browse extends Component {
    state = {destinations: []}
    componentDidMount() {
        fetch('/travelapp/destinations')
            .then(function (response)
            { return response.json();

            })
            .then(function (json) {
                this.setState({destinations: json});

            }.bind(this));
    }



    /*haedata = () => {
        fetchall((function (destinations) {

            /!*if (virhe) {
                this.setState({virhestatus: virhe});
            } else {*!/
                this.setState({data: destinations});

        }).bind(this));
    }*/
    render() {

        var kaikki = this.state.destinations.map(function (destination) {
            return (<CountryList destinations = {destination} key={destination.id} {...this.props}/>)
        console.dir(this.state.destinations);
        }.bind(this));
        return (
            <div className="Browse">
                <h1>Destinations</h1>
                <h4>Choose a country</h4>
                <div>{kaikki}</div>

            </div>
        );
    }
}

export default Browse;