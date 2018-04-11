import React, {Component} from 'react';


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
                <div key={destination.id}>
                    <p>{destination.country}</p>
                    <p>{destination.city}</p>
                    <p>{destination.name}</p>
                    <p>{destination.category}</p>
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
