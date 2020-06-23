import React, { Component } from 'react'

export default class UpdateProfile extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" value={name} />

                    <label>Email</label>
                    <input type="text" value={email} />

                    <label>Uid</label>
                    <input type="text" value={uid} />
                </form>

            </div>
        )
    }
}
