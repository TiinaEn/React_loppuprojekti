import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import CityDestinations from './CityDestinations';

class CityList extends Component {
    state = {cities: []}
    componentDidMount() {
        let country = this.props.match.params.country;
        fetch('/travelapp/destinations')
            .then(function (response)
            { return response.json();

            })
            .then(function (json) {
                this.setState({cities: json});

            }.bind(this));
    }
    showDestinations = (e) => {
        e.preventDefault();
         this.props.history.push("/citydestinations/"+this.state.cities.city);
    }
    render () {

        var cities = this.state.cities.map(function (destination1) {
            return (<CityDestinations cities = {destination1} key={destination1.id} {...this.props}/>)
            console.dir(this.state.cities);
        }.bind(this));
        console.dir(this.state.cities);
        return (

            <ListGroupItem onClick={this.showDestinations} header={this.state.cities.city}>
                <div>{cities}</div>

            </ListGroupItem>
        )
}
}

export default CityList;