import React, { Component } from 'react';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-align">
                <h2>Profile page</h2>
                <button className="logout" onClick={ this.props.logOut }>LogOut</button>
            </div>
        )
    }
}