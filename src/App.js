import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import CreateEntry from './Components/CreateEntry'
import Browse from './Components/Browse'
import Fourth from './Components/Fourth'

class App extends Component{
    render () {
        return (
            <Router>
                <div className="App">
                    <Navigation/>

                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/createnew" component={CreateEntry}/>
                        <Route exact path="/Browse" component={Browse}/>
                        <Route exact path="/fourth" component={Fourth}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}
class Navigation extends Component {
    render () {
        return (
            <div>
                <ul>
                    <li><a href ="/createnew">Uusi merkintä</a></li>
                    <li><a href ="/browse">Selaa</a></li>
                    <li><a href ="/fourth">Neljäs</a></li>
                    <li><input type="text" placeholder="Etsi"/></li>
                    <li><a href = "/login">Log in</a></li>
                </ul>
            </div>
        )
    }
}

export default App;