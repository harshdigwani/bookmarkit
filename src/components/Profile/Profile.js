import React, { Component } from 'react'
import { isLoggedIn } from '../../services/Auth';
import Base from '../Base/Base';
import './Profile.css';
import Spinner from '../Core/Spinner';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Name",
            email: "Email",
            photoUrl: "",
            emailVerified: "",
            uid: "",
            loading: true
        }
    }

    componentDidMount() {
        const user = isLoggedIn().user;
        console.log(user);
        this.setState({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
            loading: false
        })
    }

    render() {
        const { name, email, photoUrl, uid, loading } = this.state;
        return (
            <Base>
                {loading && <Spinner />}
                <div className="container profile">
                    <img className="profile-pic" src={photoUrl || "../../../images/avtar.svg"} alt={uid} />
                    <h1>Hi! {name || "Buddy"}</h1>
                    <h3>{email}</h3>
                </div>
            </Base>
        )
    }
}

export default Profile;