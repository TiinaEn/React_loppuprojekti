import React, { Component } from 'react';
//import '../App.css';
import '../Note.css';
import MapComponent2 from "./MapComponent2";
import {createEntry} from "../Service";

class CreateEntry extends Component {

    constructor(props) {
        super(props);
        {this.state = {name: '', category: '', address:'', description: '', rating: '', city: '', country: '', weblink: ''}}
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
    // handleUserChange = (e) => {this.setState({user: e.target.value})}
    handleCreateClick = (e) => {
        e.preventDefault();

        createEntry(this.state, (function (){this.goBackToBrowse()}).bind(this));
        this.setState({name: '', category: '', address:'', description: '', rating: '', city: '', country: '', weblink: ''})
    }

    render() {
        return (
            <div className="xx">
                <div className="content">
                <h1>New Note</h1>
                <br/>
                <form>
                    <label>Name: </label>
                    <textarea type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                    <br/>
                    <label>Category: </label>
                    <select value={this.state.category} onChange={this.handleCategoryChange}>
                        <option>Restaurants</option>
                        <option>Hotels</option>
                        <option>Shops</option>
                        <option>Sights</option>
                        <option>Other</option>
                    </select>
                    <br/>
                    <label>Address: </label>
                    <textarea type="text" placeholder="Address" value={this.state.address} onChange={this.handleAddressChange}/>
                    <br/>
                    <label>Country: </label>
                    <textarea type="text" placeholder="Country" value={this.state.country} onChange={this.handleCountryChange}/>
                    <br/>
                    <label>City: </label>
                    <textarea type="text" placeholder="City" value={this.state.city} onChange={this.handleCityChange}/>
                    <br/>
                    <label>Description: </label>
                    <textarea type="text" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    <br/>
                    <label>Rating: </label>
                    <select value={this.state.rating} onChange={this.handleRatingChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br/>
                    <label>Weblink: </label>
                    <textarea type="text" placeholder="Weblink" value={this.state.weblink} onChange={this.handleWeblinkChange}/>
                    <br/>
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
                <MapComponent2/>
            </div>
        );
    }
}

export default CreateEntry;