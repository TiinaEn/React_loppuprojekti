import React, {Component} from 'react';
import {ListGroup, ListGroupItem,Form,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import {deleteEntry} from "../ServiceClient";

import MapComponent from "./MapComponent";
import {GoogleApiWrapper} from "google-maps-react";

import {updateEntry} from "../ServiceClient";


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

    handleNameChange = (e) => {
        const n = this.state.destinations;
        n.name = e.target.value;
        this.setState({destinations: n});
    }

    handleCategoryChange = (e) => {
        const c = this.state.destinations;
        c.category = e.target.value;
        this.setState({destinations: c});
    }

    handleAddressChange = (e) => {
        const a = this.state.destinations;
        a.address = e.target.value;
        this.setState({destinations: a});
    }

    handleCountryChange = (e) => {
        const co = this.state.destinations;
        co.country = e.target.value;
        this.setState({destinations: co});
    }

    handleCityChange = (e) => {
        const ci = this.state.destinations;
        ci.city = e.target.value;
        this.setState({destinations: ci});
    }

    handleRatingChange = (e) => {
        const r = this.state.destinations;
        r.rating = e.target.value;
        this.setState({destinations: r});
    }

    handleDescriptionChange = (e) => {
        const d = this.state.destinations;
        d.description = e.target.value;
        this.setState({destinations: d});
    }

    handleWeblinkChange = (e) => {
        const w = this.state.destinations;
        w.weblink = e.target.value;
        this.setState({destinations: w});
    }

    handleUpdateClick = (e) => {
        e.preventDefault();
        updateEntry(this.state.destinations, this.returnToList);
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
        deleteEntry(this.state.id)
            .then((function () {
                this.returnToList()
            }).bind(this))
    }

    handleCancelClick = (e) => {
        e.preventDefault();
        this.returnToList();
    }

    returnToList = () => {
        this.props.history.push("/browse");
    }

    render() {
        var details = this.state.destinations;
        /*console.log(details);*/
        return(
            <div>
            <ListGroup>
                <div>
                    <h3><b> {details.name} </b>({details.category})</h3>
                    <ListGroupItem><b>Location: </b>{details.country}, {details.city}</ListGroupItem>
                    <ListGroupItem><b>Address: </b>{details.address}</ListGroupItem>
                    <ListGroupItem><b>Rating: </b>{details.rating}/5</ListGroupItem>
                    <ListGroupItem><b>Things to remember: </b>{details.description}</ListGroupItem>
                    <ListGroupItem>{details.weblink}</ListGroupItem>
                </div>
                {/*<input type="submit" value="Update" onClick={this.handleUpdateClick}/>
                <input type="submit" value="Remove" onClick={this.handleDeleteClick}/>

                <input type="submit" value="Cancel" onClick={this.handleCancelClick}/>

            </ListGroup>
                <MapComponent google={this.props.google}/>

                <input type="submit" value="Cancel" onClick={this.handleCancelClick}/>*/}
                {/*<input className="btn btn-default btn-md" type="submit" value="Remove" onClick={this.handleDeleteClick}/>
                <input className="btn btn-default btn-md" type="submit" value="Back to Browse" onClick={this.handleCancelClick}/>*/}
            </ListGroup>
                <div className="content">
                    <h3>Update Entry</h3>
                    <br/>
                    <form className= "form-horizontal">
                        <div className= "form-group">
                            <label className="control-label col-xs-2">Name: </label>
                            <div className="col-xs-10">
                                <input className="form-control " type="text" placeholder="Name" value={details.name} onChange={this.handleNameChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-2">Category: </label>
                            <div className="col-xs-10">
                                <select className="form-control" value={details.category} onChange={this.handleCategoryChange}>
                                    <option>Choose category</option>
                                    <option>Restaurants</option>
                                    <option>Hotels</option>
                                    <option>Shops</option>
                                    <option>Sights</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-2">Address: </label>
                            <div className="col-xs-10">
                                <textarea className="form-control" type="text" placeholder="Address" value={details.address} onChange={this.handleAddressChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-2">Country: </label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" placeholder="Country" value={details.country} onChange={this.handleCountryChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-2">City: </label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" placeholder="City" value={details.city} onChange={this.handleCityChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-2">Things to remember: </label>
                            <div className="col-xs-10">
                                <textarea className="form-control" type="text" placeholder="Description" value={details.description} onChange={this.handleDescriptionChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-2">Rating: </label>
                            <div className="col-xs-10">
                                <select className="form-control" value={details.rating} onChange={this.handleRatingChange}>
                                    <option>Choose rating</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-2">Weblink: </label>
                            <div className="col-xs-10">
                                <input className="form-control" type="url" placeholder="Weblink" value={details.weblink} onChange={this.handleWeblinkChange}/>
                            </div>
                        </div>
                        <input className="btn btn-default btn-md" type="submit" value="Remove" onClick={this.handleDeleteClick}/>
                        <input className="btn btn-default btn-md" type="submit" value="Back to Browse" onClick={this.handleCancelClick}/>
                        <input className="btn btn-default btn-md" type="submit" value="Update" onClick={this.handleUpdateClick}/>
                        {/*<input type="submit" value="Update" onClick={this.handleUpdateClick}/>
                        <input type="submit" value="Remove" onClick={this.handleDeleteClick}/>
                        <input type="submit" value="Return" onClick={this.handleCancelClick}/>*/}
                    </form>
                </div>

            </div>
        );
    }



}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZEa7IBzFg2qOA5xgGRzlDab9zyDnptKs',
})(OneDestination)