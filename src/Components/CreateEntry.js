import React, { Component } from 'react';

import '../App.css';

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

                    <label>Name: </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label>Kategoria: </label>
                    <select>
                        <option value=''>Ravintolat</option>
                        <option value=''>Hotellit</option>
                        <option value=''>Kaupat</option>
                        <option value=''>Nähtävyydet</option>
                        <option value=''>Muut</option>
                    </select>
                    <label>Kuvaus: </label>
                    <textarea type="text" placeholder="Muistiinpanon kuvaus" value={this.state.description} onChange={this.handleChange}/>

                    <input type="submit" value="Luo" onClick={this.handleCreateClick}/>
                </form>

            </div>
        );
    }
}

export default CreateEntry;