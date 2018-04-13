import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';
/*import CityList from './CityList';*/



import '../App.css';

class CountryList extends Component {

    showCities = (e) => {
        e.preventDefault();
        this.props.history.push("/browse/"+this.props.countryname)
    }

    render() {


        return(
            <ListGroupItem onClick={this.showCities} header = {this.props.countryname}>

            </ListGroupItem>
        );
    }

}

export default CountryList;
