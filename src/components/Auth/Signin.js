import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { signIn, signUp, isLoggedIn } from '../../services/Auth';
import Base from '../Base/Base';
import './Signin.css';
import Spinner from '../Core/Spinner';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false
        }
    }

    signIn = async (e) => {
        e.preventDefault();
        if (this.state.email.length === 0 || this.state.password.length === 0)
            return alert("Email and Pasword is Required");

        this.setState({ loading: true })
        await signIn(this.state.email, this.state.password);
        this.setState({ email: "", password: "", loading: false });
    }

    signUp = async (e) => {
        e.preventDefault();
        if (this.state.email.length === 0 || this.state.password.length === 0) return alert("Email and Pasword is Required");
        else if (this.state.password.length < 6)
            return alert("Password Must be atleast 6 chars");

        this.setState({ loading: true })
        await signUp(this.state.email, this.state.password);
        this.setState({ email: "", password: "", loading: false });
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        if (isLoggedIn()) {
            return <Redirect to="/" />
        }

        return (
            <Base>
                {this.state.loading && <Spinner />}
                <div className="container">
                    <h1 className="display-1">Login</h1>
                    <form className="flex-col login-form">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange} focus="true" />

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} />

                        <div>
                            <button id="btn-signin" onClick={this.signIn}>Log In</button>
                            {/* <button onClick={(e) => { e.preventDefault(); isAutheticated(); }}>Check login</button> */}
                            <button id="btn-signup" onClick={this.signUp}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </Base>
        )
    }
}

export default Signin