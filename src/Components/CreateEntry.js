import React, { Component } from 'react';
import '../App.css';
import '../Note.css';
import MapComponent2 from "./MapComponent2";

class CreateEntry extends Component {

    constructor(props) {
        super(props);
        {this.state = {name: '', category: '', description: '', rating: '', city: '', country: ''}}
    }



    handleCreateClick = (e) => {
        e.preventDefault
    }
    render() {
        return (
            <div className="xx">
                <h1>New Note</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <textarea type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label>Category: </label>
                    <select>
                        <option value=''>Restaurants</option>
                        <option value=''>Hotels</option>
                        <option value=''>Shops</option>
                        <option value=''>Sights</option>
                        <option value=''>Other</option>
                    </select>
                    <br/>
                    <label>Address: </label>
                    <textarea type="text" placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
                    <br/>
                    <label>Description: </label>
                    <textarea type="text" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" value="Save" onClick={this.handleCreateClick}/>
                </form>
                <br/>
                <MapComponent2/>
            </div>
        );
    }
}

export default CreateEntry;