import React, { Component } from 'react';


class CityDestinations extends Component {
    render () {
        return (
            <p>{this.props.cities.city}</p>
        )
    }

}
export default CityDestinations;