import React, { Component } from 'react';


import '../App.css';

class OneDestination extends Component {

    render() {
        return(
            <div className="onedestination">
            {this.props.destinations.name}<br/>
            {this.props.destinations.description}
            </div>
        );
    }
    /*constructor(props) {
        super(props);
        const queryString = require('query-string');
        const params = queryString.parse(props.location.search);
        const id = params['id'];
        this.state = {destination: {name: '', city: '', description: ''}, id: id};

    }
    componentDidMount() {
        this.fetchdata();
    }

    fetchdata = () => {
        fetchone(this.state.id, this.dataready);
    }
    dataready = (fetcheddata, err) => {
        this.setState({quote: fetcheddata});
    }
    render() {
        return (
            <div className="OneDestination">

                <h1>Destinations</h1>
                <p value={this.state.destination.city}/>
                <p value={this.state.destination.name}/>
                <p value={this.state.destination.description}/>

            </div>
        );
    }*/
}

export default OneDestination;