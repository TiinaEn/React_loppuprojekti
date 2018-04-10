import React, { Component } from 'react';


class CityDestinations extends Component {
    render () {
        return (
            <div>Nimi: {this.props.destination.name}</div>
        )
    }

}
export default CityDestinations;