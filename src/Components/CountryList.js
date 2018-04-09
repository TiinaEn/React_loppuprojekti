import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';
import CityList from './CityList';



import '../App.css';

class CountryList extends Component {

    showCities = (e) => {
        e.preventDefault();
        this.props.history.push("/citylist/"+this.props.destinations.country)
    }

    render() {
        return(
            <ListGroupItem onClick={this.showCities} header = {this.props.destinations.country}>

            </ListGroupItem>
        );
    }

}

export default CountryList;