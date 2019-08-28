import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../components/Form';
import fakeAuth from '../fake/login';
import inputs from '../props/login';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInput(inputs, { field, value }) {
        let [input] = inputs.filter(input => {
            return input[field] === value;
        });

        return input;
    }

    handleSubmit(inputs) {
        let username = this.getInput(inputs, { field: "name", value: "username" });
        let password = this.getInput(inputs, { field: "name", value: "password" });
        let data = {
            username: username.value,
            password: password.value,
        };

        if (data.username !== fakeAuth.username || data.password !== fakeAuth.password) {
            this.props.signIn(false);
            return "Invalid data!";
        } else {
            this.props.signIn(true);
        }
    }

    render() {
        return(
            <div className="page-align">
                <h2>Login page</h2>
                <Form inputs={ inputs } handleSubmit={ this.handleSubmit } submit="Login" className="login_form"/>
            </div>
        )
    }
}