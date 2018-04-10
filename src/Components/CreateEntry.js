import React, { Component } from 'react';
//import '../App.css';
import '../Note.css';
import MapComponent2 from "./MapComponent2";

class CreateEntry extends Component {

    constructor(props) {
        super(props);
        {this.state = {name: '', category: '', description: '', rating: '', city: '', country: '', weblink: '', user: ''}}
    }



    handleCreateClick = (e) => {
        e.preventDefault
    }
    render() {
        return (
            <div className="xx">
                <div className="content">
                <h1>New Note</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <br/>
                    <textarea className="name" type="text" placeholder="Name" onChange={this.handleChange}/>
                    <br/>
                    <label>Category: </label>
                    <br/>
                    <select className="select" onChange={this.handleChange}>
                        <option value=''>Restaurants</option>
                        <option value=''>Hotels</option>
                        <option value=''>Shops</option>
                        <option value=''>Sights</option>
                        <option value=''>Other</option>
                    </select>
                    <br/>
                    <label>Address: </label>
                    <br/>
                    <textarea className="formfield" type="text" placeholder="Address" onChange={this.handleChange}/>
                    <br/>
                    <label>Country: </label>
                    <br/>
                    <textarea className="formfield" type="text" placeholder="Country" onChange={this.handleChange}/>
                    <br/>
                    <label>City: </label>
                    <br/>
                    <textarea className="formfield" type="text" placeholder="City" onChange={this.handleChange}/>
                    <br/>
                    <label>Description: </label>
                    <br/>
                    <textarea className="description" type="text" placeholder="Description"  onChange={this.handleChange}/>
                    <br/>
                    <label>Rating: </label>
                    <br/>
                    <select className="select" onChange={this.handleChange}>
                        <option value=''>1</option>
                        <option value=''>2</option>
                        <option value=''>3</option>
                        <option value=''>4</option>
                        <option value=''>5</option>
                    </select>
                    <br/>
                    <label>Weblink: </label>
                    <br/>
                    <textarea className="formfield" type="text" placeholder="Weblink"  onChange={this.handleChange}/>
                    <br/>
                    <label>User: </label>
                    <br/>
                    <textarea className="formfield" type="text" placeholder="User" onChange={this.handleChange}/>
                    <br/>
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