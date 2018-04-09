import React, { Component } from 'react';


class CityDestinations extends Component {
    render () {
        return (
            <p>{this.props.cities.name}</p>
        )
    }

}
export default CityDestinations;