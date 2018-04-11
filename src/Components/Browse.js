import React, {Component} from 'react';
import {fetchall} from "../ServiceClient";

import '../App.css';
import CountryList from "./CountryList";
import CityList from "./CityList";
import CityDestinations from './CityDestinations';


class Browse extends Component {
    state = {destinations: []}

    componentDidMount() {
        fetch('/travelapp/destinations')
            .then(function (response) {
                return response.json();

            })
            .then(function (json) {
                this.setState({destinations: json});

            }.bind(this));
    }

    setactivecity=(name)=> {
        this.setState({activecity: name});
    }

    render() {
        const uniquecountries = [...new Set(this.state.destinations.map(dest => dest.country))];
        const kaikki = uniquecountries.map(function (name, index) {
            return (<CountryList countryname={name} key={index} {...this.props}/>)
        }.bind(this));

        let kaupungit=[];
        if (this.props.match.params.country) {
            for(let i = 0 ; i < this.state.destinations.length ; ++i) {
                if (this.state.destinations[i].country === this.props.match.params.country) {
                    kaupungit.push(this.state.destinations[i]);
                }
            }
        }
        const uniquecities = [...new Set(kaupungit.map(dest => dest.city))];
        const kaikkicityt = uniquecities.map(function(name, index) {
            // console.log("Active? " + name, name===this.state.activecity);
            return (<CityList cityname={name} active={name===this.state.activecity}
                              setactive={this.setactivecity} alldestinations={this.state.destinations}
                              key={index} {...this.props}/>)
        }.bind(this));

        return (
            <div className="Browse">
                <div  className="countrylistdiv">
                    <h1>Destinations</h1>
                    <h4>Choose a country</h4>

                    <div class="col-xs-4">{kaikki}</div>

                </div>
                <div className="citylistdiv">
                    <div class="col-xs-8" >
                    {kaikkicityt}
                    </div>
                </div>
                <hr/>


            </div>
        );
    }
}

export default Browse;