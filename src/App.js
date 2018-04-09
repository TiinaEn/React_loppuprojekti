import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import CreateEntry from './Components/CreateEntry'
import Browse from './Components/Browse'
import Profile from './Components/Profile'
import MapApp from "./Components/MapApp"
import skyline from './Components/Skyline0.png'


class App extends Component {
    render() {
        return (
            <div>
                <img style={{width: '100%',}} src={skyline}/>
                <Router>
                    <div className="App">
                        <Navigation/>

                        <Switch>
                            <Route exact path="/logout" component={Login}/>
                            <Route exact path="/createnew" component={CreateEntry}/>
                            <Route exact path="/browse" component={Browse}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/home" component={MapApp}/>
                        </Switch>

                    </div>
                </Router>

            </div>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <div className="container">
                    <ul className="pull-left">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/createnew">New note</a></li>
                        <li><a href="/browse">Browse</a></li>
                        <li><a href="/profile">Profile</a></li>
                    </ul>
                    <ul className="pull-right">
                        <li><input type="text" placeholder="Search"/></li>
                        <li><a href="/logout">Log out</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class NavigationMobile extends Component { //Rikki vielä
    render() {
        return (

            <div>
                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>

                            </button>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/createnew">New note</a></li>
                            <li><a href="/browse">Browse</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><input type="text" placeholder="Search"/></li>
                            <li><a href="/logout">Log out</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default App;