import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import CreateEntry from './Components/CreateEntry'
import Browse from './Components/Browse'
import Profile from './Components/Profile'
import MapApp from "./Components/MapApp";
import Register from './Components/Register'


class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Navigation/>

                        <div>
                            <Login/>

                        </div>

                        <Switch>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
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

/*export default App;*/
export default App;