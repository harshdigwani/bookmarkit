import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Base from '../Base/Base';
import './Home.css';
import Signin from '../Auth/Signin';
import { isLoggedIn } from '../../services/Auth';
import { setShareText, getShareText } from '../../services/TextShare';
import Spinner from '../Core/Spinner';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            text: "",
            uid: ""
        }
    }

    async componentDidMount() {
        const user = await isLoggedIn().user;
        if (!user) return;
        this.setState({
            user: user,
            uid: user.uid,
        })
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    shareText = async () => {
        if (!this.state.user) return this.props.history.push('signin');
        if (!this.state.text) return
        await setShareText(this.state);
    }

    getText = async () => {
        if (!this.state.user) return this.props.history.push('signin');
        const data = await getShareText(this.state.uid);
        this.setState({
            text: data.text
        })
    }

    render() {
        const { text, uid, user } = this.state;
        return (
            <Base>
                {/* {!this.state.user && <Redirect to="signin" />} */}
                <div className="container">
                    {/* <h1>Home component</h1> */}
                    <input className="share-text" onChange={this.handleChange} value={text} placeholder="Paste Your content" />
                    <span className="btns">
                        <button className="btn-share" onClick={this.shareText}>Share <span className="fa fa-share" /></button>
                        <button className="btn-share bg-blue" onClick={this.getText}>Get &nbsp;<span className="fa fa-cloud-download" /></button>
                    </span>
                </div>
            </Base>
        )
    }
}

export default Home