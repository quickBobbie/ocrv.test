import React, { Component } from 'react';
import { createStore } from 'redux';

import reducer from '../reducers/login';
import action from '../actions/login';

import Form from '../components/Form';

import fakeAuth from '../fake/login';
import inputs from '../props/login';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.store = createStore(reducer, { inputs, message: "" });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const inputs = this.store.getState().inputs;
        let data = {
            username: inputs.username.value,
            password: inputs.password.value,
        };

        if (data.username !== fakeAuth.username || data.password !== fakeAuth.password) {
            this.props.signIn(false);
            this.store.dispatch(action().message("Имя пользователя или пароль введены не верно"))
        } else {
            this.props.signIn(true);
        }
    }

    handleChange(event) {
        this.store.dispatch(action().input(event.target));
    }

    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        let inputs = this.store.getState().inputs;
        for (let key in inputs) {
            this.store.dispatch(action().input({name: inputs[key].name, value: ""}));
        }
    }

    render() {
        return(
            <div className="page-align">
                <h2>Форма входа</h2>
                <Form
                    state={ this.store.getState() }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    submit="Войти"
                    className="login_form"
                />
            </div>
        )
    }
}