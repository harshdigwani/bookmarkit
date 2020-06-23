import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import { signOut, isLoggedIn } from '../../services/Auth';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navbar: true
        };
    }

    render() {
        let { navbar } = this.state;

        return (
            <header className="navbar" >
                <span className="brand">
                    <img className="logo" src="../../../images/logo.png" alt="logo" />&nbsp;Bookmarkit
                    <button className="nav-menu fa fa-chevron-down" onClick={() => this.setState((prevState) => ({ navbar: !prevState.navbar }))} />
                </span>

                <span className={navbar ? "navbar hidden" : "navbar"}>
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/">Home</NavLink></span >
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/bookmark">Bookmark</NavLink></span>
                    {/* <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/files">Files</NavLink></span> */}
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/profile">Profile</NavLink></span >
                    {!isLoggedIn() && <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/signin">Login</NavLink></span>}
                    {isLoggedIn() && <span className="nav-link header-signout"
                        onClick={() => {
                            if (!window.confirm("Do you want to logout")) return;
                            window.location.reload();
                            signOut();
                        }} >Logout</span>}
                    {/* <button onClick={signOut}>Logout</button> */}
                </span>
            </header >
        )
    }
}
export default Header