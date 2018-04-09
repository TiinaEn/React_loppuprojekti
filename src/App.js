import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import CreateEntry from './Components/CreateEntry'
import Browse from './Components/Browse'
import Profile from './Components/Profile'
import MapApp from "./Components/MapApp"
import skyline from './Components/Skyline0.png'
import CityList from './Components/CityList'
import CityDestinations from './Components/CityDestinations'


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
                            <Route path="/citylist/:country" component={CityList}/>
                            <Route path="/citydestinations/:city" component={CityDestinations}/>
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

export default App;