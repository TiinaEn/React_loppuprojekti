import React, {Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress, geocodeByPlaceId} from 'react-places-autocomplete';
import {GoogleApiWrapper} from "google-maps-react";

class MapAutocomplete extends Component {
    constructor(props) {
        super(props)
        this.state = { address: 'Search' }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            /*.then(results => getLatLng(results[0]))*/
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete inputProps={inputProps} />
                <button type="submit">Submit</button>
            </form>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZEa7IBzFg2qOA5xgGRzlDab9zyDnptKs',
})(MapAutocomplete)