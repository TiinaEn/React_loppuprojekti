import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import CityDestinations from './CityDestinations';

class CityList extends Component {
/*
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
*/
    showDestinations = (e) => {
        e.preventDefault();
        this.props.setactive(this.props.cityname);
         // this.props.history.push("/citydestinations/"+this.state.cities.city);
    }
    render () {
        // this.props.cityname;
        // this.props.alldestinations;

        let destsforcity=[];
        if (this.props.active) {
            for(let i = 0 ; i < this.props.alldestinations.length ; ++i) {
                if (this.props.alldestinations[i].city === this.props.cityname) {
                    destsforcity.push(this.props.alldestinations[i]);
                }
            }
        }

        var destinations = destsforcity.map(function (destination) {        //listing the cities
            return (<CityDestinations destination={destination} key={destination.id} {...this.props}/>)
        }.bind(this));

        return (

            <ListGroupItem onClick={this.showDestinations} header={this.props.cityname}>
                <div>{destinations}</div>

            </ListGroupItem>
        )
}
}

export default CityList;