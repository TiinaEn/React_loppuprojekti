import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';


class CityDestinations extends Component {
    showOne = (e) => {
        e.preventDefault();
        this.props.history.push("/details?id="+this.props.destination.id);

    }
    render () {
        return (
            <ListGroupItem onClick={this.showOne} header={this.props.destination.name}>

            </ListGroupItem>
        )}

}
export default CityDestinations;