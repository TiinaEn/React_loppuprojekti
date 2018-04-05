import React, { Component } from 'react';
import '../App.css';
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
                <form onSubmit={this.handleSubmit}>

                    <label>Title: </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label>Category: </label>
                    <select>
                        <option value=''>Restaurants</option>
                        <option value=''>Hotels</option>
                        <option value=''>Shops</option>
                        <option value=''>Sights</option>
                        <option value=''>Other</option>
                    </select>
                    <label>Description: </label>
                    <textarea type="text" placeholder="Muistiinpanon kuvaus" value={this.state.description} onChange={this.handleChange}/>

                    <input type="submit" value="Luo" onClick={this.handleCreateClick}/>
                </form>
                <MapComponent2/>
            </div>
        );
    }
}

export default CreateEntry;