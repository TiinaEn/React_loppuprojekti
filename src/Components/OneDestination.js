import React, {Component} from 'react';
import {ListGroup, ListGroupItem,Form,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import {deleteEntry} from "../ServiceClient";
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
                <input type="submit" value="Cancel" onClick={this.handleCancelClick}/>*/}
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
                        {/*
                    <label>User: </label>
                    <br/>
                    <textarea className="formfield" type="text" placeholder="User" onChange={this.handleChange}/>
                    <textarea type="text" placeholder="User" value={this.state.user} onChange={this.handleUserChange}/>
                    <br/>
*/}
                        <input type="submit" value="Update" onClick={this.handleUpdateClick}/>
                        <input type="submit" value="Remove" onClick={this.handleDeleteClick}/>
                        <input type="submit" value="Return" onClick={this.handleCancelClick}/>
                    </form>
                </div>
{/*                <Form>
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.name}
                            placeholder="Name"
                            onChange={this.handleNameChange}
                        />
                    </FormGroup>
                    <div className="form-group">
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
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.category}
                            placeholder="Category"
                            onChange={this.handleCategoryChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.address}
                            placeholder="Address"
                            onChange={this.handleAddressChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.country}
                            placeholder="Country"
                            onChange={this.handleCountryChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.city}
                            placeholder="City"
                            onChange={this.handleCityChange}
                        />
                    </FormGroup>
                    <div className="form-group">
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
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.rating}
                            placeholder="Rating"
                            onChange={this.handleRatingChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.description}
                            placeholder="Description"
                            onChange={this.handleDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            rows={1}
                            value={details.weblink}
                            placeholder="Weblink"
                            onChange={this.handleWeblinkChange}
                        />
                    </FormGroup>
                    <input type="submit" value="Update" onClick={this.handleUpdateClick}/>
                    <input type="submit" value="Remove" onClick={this.handleDeleteClick}/>
                    <input type="submit" value="Return" onClick={this.handleCancelClick}/>
                </Form>*/}
            </div>
        );
    }



}
export default OneDestination;