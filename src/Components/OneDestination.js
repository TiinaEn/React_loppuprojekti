import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';



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

                <div>
                    <h3><b> {details.name} </b>({details.category})</h3>
                    <ListGroupItem><b>Location: </b>{details.country}, {details.city}</ListGroupItem>
                    <ListGroupItem><b>Rating: </b>{details.rating}/5</ListGroupItem>
                    <ListGroupItem><b>Things to remember: </b>{details.description}</ListGroupItem>
                    <ListGroupItem>{details.weblink}</ListGroupItem>
                </div>
            </ListGroup>
        );
    }



}
export default OneDestination;