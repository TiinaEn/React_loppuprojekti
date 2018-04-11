import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';


class SearchResult extends Component {
    state = {foundDestinations: [], founddestinationsrendered: false}

    componentDidMount() {
        this.fetchDestinations();
    }

    fetchDestinations = (foo) => {
        return fetch('/travelapp/find?n=' + this.props.match.params.searchword)
            .then(function (response) {
                return response.json();

            })
            .then(function (json) {

                this.setState({foundDestinations: json, founddestinationsrendered: foo});

            }.bind(this));
    }

    async shouldComponentUpdate(nextProps, nextState) {
        console.log("ShouldUpdate?")
        if(!this.state.founddestinationsrendered && nextProps.match.params.searchword === this.props.match.params.searchword)
            return false;
        this.fetchDestinations(true);
        console.log("ShouldUpdate", true);
        return true;
    }

    // componentDidUpdate() {
    //     fetch('/travelapp/find?n=' + this.props.match.params.searchword)
    //         .then(function (response) {
    //             return response.json();
    //
    //         })
    //         .then(function (json) {
    //             this.setState({foundDestinations: json, founddestinationsrendered: false});
    //
    //         }.bind(this));
    // }

    render() {
        this.state.founddestinationsrendered = true;
        console.log("SearchResult, render", this.state);
        const results = this.state.foundDestinations.map(function(destination) {
            return (

               // <ListGroupItem><b>Location: </b>{details.country}, {details.city}</ListGroupItem>
                <div key={destination.id}>
                    <h3> <b>{destination.name}</b> ({destination.category})</h3>
                    <ListGroupItem> <b> Location: </b> {destination.country}, {destination.city} </ListGroupItem>
                </div>)
        })
            return (
                <div className="searchResult">
                    <div className="searchList">
                        {results}
                    </div>
                </div>
            )
        }

}

export default SearchResult;
