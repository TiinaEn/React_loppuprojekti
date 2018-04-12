import React, {Component} from 'react';
import './App.css';
import {Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login'

import CreateEntry from './Components/CreateEntry'
import Browse from './Components/Browse'
import Profile from './Components/Profile'
import MapApp from "./Components/MapApp"
import OneDestination from './Components/OneDestination'
import skyline from './Components/Skyline0.png'
import SearchResult from "./Components/SearchResult";
import history from './history';
import CityList from './Components/CityList'
import CityDestinations from './Components/CityDestinations'
import {Link} from 'react-router-dom';
import Register from './Components/Register';
import {getCurrentUser} from './helpers/LoginHelper';
import {ACCESS_TOKEN} from './Service';

class App extends Component {
    state={search: ''}
    dosearch = (searchword) => {
        this.setState({search: searchword});
        history.push("/find/"+searchword);
    }

    render() {
        let reitit;
        if (localStorage.getItem(ACCESS_TOKEN)) {
            reitit = (
                <Switch>

                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>

                    <Route exact path="/createnew" component={CreateEntry}/>
                    <Route exact path="/browse" component={Browse}/>
                    <Route path="/browse/:country" component={Browse}/>
                    <Route path="/details" component={OneDestination}/>
                    <Route exact path="/profile" component={Profile}/>

                    /*<Route exact path="/travelapp/home" component={MapApp}/>*/
                    <Route exact path="/" component={MapApp}/>

                    <Route path="/find/:searchword" component={SearchResult}/>
                    {/*  <Route path="/citylist/:country" component={CityList}/>
                            <Route path="/citydestinations/:city" component={CityDestinations}/>*/}

                </Switch>
            )
        } else {
            reitit = (
                <Switch>
                    <Route exact path="/register" component={Register}/>
                    <Route component={Login}/>
                </Switch>);
        }
        return (
            <div>
                <Router history={history}>
                    <div className="App">
                        <Navigation dosearch={this.dosearch}/>
                        {reitit}
                    </div>
                </Router>
            </div>
        );

    }
}

class Navigation extends Component {
    state = {searchtext: ''}
    search = (event) => {
        event.preventDefault();
        let searchword = this.state.searchtext;
        this.props.dosearch(searchword);
    }

    logoutfunction = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        history.push("/login");
    }

    textChanged = (event) => {
        this.setState({searchtext: event.target.value});
    }

    render() {
        return (
            <div className="nav">
                <img className="picture" src={skyline}/>
                <div className="pull-right">
                    <form className="find" onSubmit={this.search}>
                        <input className="rounded" type="text" value={this.state.searchtext} onChange={this.textChanged} placeholder="Search"/>
                        <button className="btn-link" onClick={this.logoutfunction}>SIGN IN / SIGN OUT</button>
                    </form>
                </div>
                <div className="container-fluid">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavBar">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/createnew"}>New note</Link></li>
                            <li><Link to={"/browse"}>Browse</Link></li>
                            <li><Link to={"/profile"}>Profile</Link></li>

                        </ul>
                    </div>

                </div>
            </div>

        )
    }
}

export default App;