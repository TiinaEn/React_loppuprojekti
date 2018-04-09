import React, {Component} from "react";
import imgmobile from './imgmobile.jpg';
import {Link} from 'react-router-dom';
import '../App.css';

class NavigationMobile extends React.Component {
    render() {
        return (

            <div >
                <img style={{width: '100%',}} src={imgmobile}/>

                {/*<Navbar inverse collapseOnSelect>*/}
                    {/*<Navbar.Header>*/}
                        {/*<Navbar.Brand>*/}
                            {/*<a href="#home">Home</a>*/}
                        {/*</Navbar.Brand>*/}
                        {/*<Navbar.Toggle />*/}
                    {/*</Navbar.Header>*/}
                    {/*<Navbar.Collapse>*/}
                        {/*<Nav>*/}
                            {/*<NavItem href="#createnew">*/}
                                {/*New Note*/}
                            {/*</NavItem>*/}
                            {/*<NavItem href="#browse">*/}
                                {/*Browse*/}
                            {/*</NavItem>*/}
                            {/*<NavItem href="#profile">*/}
                                {/*Profile*/}
                            {/*</NavItem>*/}

                        {/*</Nav>*/}
                        {/*<Nav pullRight>*/}
                            {/*<NavItem> <input type="text" placeholder="Search"/>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem href="#logout">*/}
                                {/*Log out*/}
                            {/*</NavItem>*/}
                        {/*</Nav>*/}
                    {/*</Navbar.Collapse>*/}
                {/*</Navbar>;*/}

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

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
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationMobile;