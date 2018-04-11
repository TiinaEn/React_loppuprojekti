import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';



/* tämä komponentti ei toimi!*/

class OneDestination extends Component {
    constructor(props) {
        super(props);
        const queryString = require('query-string');
        const params = queryString.parse(props.location.search);
        const id = params['id'];
        this.state = {destinations: {name: '', description: ''}, id: id};
    }
    state = {destinations: []}

    componentDidMount() {
        fetch('/travelapp/destinations/' + this.state.id, {accept: 'application/json'})
            .then(function (response) {
                return response.json();

            })
            .then(function (json) {
                this.setState({destinations: json});

            }.bind(this));
    };





    render() {
        var details = this.state.destinations;
        console.log(details);
        return(
            <ListGroup>
                <div>{details.description}</div>
            </ListGroup>
        );
    }



}
export default OneDestination;