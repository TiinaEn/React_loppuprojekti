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
import {Link} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Navigation/>

                        <Switch>
                            <Route exact path="/logout" component={Login}/>
                            <Route exact path="/createnew" component={CreateEntry}/>
                            <Route exact path="/browse" component={Browse}/>
                            <Route path="/browse/:country" component={Browse}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/home" component={MapApp}/>
                          {/*  <Route path="/citylist/:country" component={CityList}/>
                            <Route path="/citydestinations/:city" component={CityDestinations}/>*/}
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
                <img style={{width: '100%',}} src={skyline}/>

                <div className="container-fluid">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavBar">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><Link to={"/createnew"}>New note</Link></li>
                            <li><Link to={"/browse"}>Browse</Link></li>
                            <li><Link to={"/profile"}>Profile</Link></li>
                            <li><input type="text" placeholder="Search"/></li>
                            <li><Link to={"/logout"}>Log out</Link></li>
                        </ul>
                    </div>
                    {/*<ul className="pull-left">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/createnew">New note</a></li>
                        <li><a href="/browse">Browse</a></li>
                        <li><a href="/profile">Profile</a></li>
                    </ul>
                    <ul className="pull-right">
                        <li><input type="text" placeholder="Search"/></li>
                        <li><a href="/logout">Log out</a></li>
                    </ul>*/}
                </div>
            </div>
        )
    }
}


export default App;