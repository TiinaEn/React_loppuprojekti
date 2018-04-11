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

                <div>
                    <h3><b> {details.name} </b>({details.category})</h3>
                    <p><b>Location: </b>{details.country}, {details.city}</p>
                    <p><b>Rating: </b>{details.rating}/5</p>
                    <p><b>Things to remember: </b>{details.description}</p>
                    <p>{details.weblink}</p>
                </div>
            </ListGroup>
        );
    }



}
export default OneDestination;