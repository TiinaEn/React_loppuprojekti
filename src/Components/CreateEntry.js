import React, { Component } from 'react';
//import '../App.css';
import '../Note.css';
import MapComponent2 from "./MapComponent2";
import {createEntry} from "../ServiceClient";


class CreateEntry extends Component {

    constructor(props) {
        super(props);
        {this.state = {name: '', category: '', address:'', description: '',
            rating: '', city: '', country: '', weblink: '', latitude: 0, longitude: 0}}
    }

    goBackToBrowse = () => {
        this.props.history.push("/browse");
    }

    handleNameChange = (e) => {this.setState({name: e.target.value})}
    handleCategoryChange = (e) => {this.setState({category: e.target.value})}
    handleAddressChange = (e) => {this.setState({address: e.target.value})}
    handleDescriptionChange = (e) => {this.setState({description: e.target.value})}
    handleRatingChange = (e) => {this.setState({rating: e.target.value})}
    handleCityChange = (e) => {this.setState({city: e.target.value})}
    handleCountryChange = (e) => {this.setState({country: e.target.value})}
    handleWeblinkChange = (e) => {this.setState({weblink: e.target.value})}
    handleCoordChange = (pos) => {this.setState({latitude: pos.lat(), longitude: pos.lng()})}
    // handleUserChange = (e) => {this.setState({user: e.target.value})}
    handleCreateClick = (e) => {
        e.preventDefault();

        createEntry(this.state, (function (){this.goBackToBrowse()}).bind(this));
        this.setState({name: '', category: '', address:'', description: '', rating: '', city: '', country: '', weblink: ''})
    }

    render() {
        console.log("CreateEntrylog", this.state.latitude, this.state.longitude);
        return (
            <div className="xx">
                <div className="content">
                <h1>New Note</h1>
                <br/>
                <form className= "form-horizontal">
                    <div className= "form-group">
                        <label className="control-label col-xs-2">Name: </label>
                        <div className="col-xs-10">
                            <input className="form-control " type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                        </div>
                        </div>
                    <div className="form-group">
                        <label className="control-label col-xs-2">Category: </label>
                        <div className="col-xs-10">
                            <select className="form-control" value={this.state.category} onChange={this.handleCategoryChange}>
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
                            <textarea className="form-control" type="text" placeholder="Address" value={this.state.address} onChange={this.handleAddressChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-2">Country: </label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" placeholder="Country" value={this.state.country} onChange={this.handleCountryChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-2">City: </label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" placeholder="City" value={this.state.city} onChange={this.handleCityChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-2">Things to remember: </label>
                        <div className="col-xs-10">
                            <textarea className="form-control" type="text" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-2">Rating: </label>
                        <div className="col-xs-10">
                            <select className="form-control" value={this.state.rating} onChange={this.handleRatingChange}>
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
                            <input className="form-control" type="url" placeholder="Weblink" value={this.state.weblink} onChange={this.handleWeblinkChange}/>
                        </div>
                    </div>
{/*
                    <label>User: </label>
                    <br/>
                    <textarea className="formfield" type="text" placeholder="User" onChange={this.handleChange}/>
                    <textarea type="text" placeholder="User" value={this.state.user} onChange={this.handleUserChange}/>
                    <br/>
*/}
                    <input type="submit" value="Save" onClick={this.handleCreateClick}/>
                </form>
                </div>
                <br/>
                <MapComponent2 setdestcoords={this.handleCoordChange}/>
            </div>
        );
    }
}

export default CreateEntry;