import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createStore } from 'redux';

import reducer from './reducers/app';
import action from './actions/app';

import Main from './pages/Main';
import News from './pages/News';
import Article from './pages/Article';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

import MenuProps from './props/menu';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.store = createStore(reducer, {
            isAuth: localStorage.getItem("isAuth") === 'true',
            menu: MenuProps(localStorage.getItem("isAuth") === 'true')
        });

        this.signIn = this.signIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    signIn(isAuth) {
        this.store.dispatch(action(isAuth, MenuProps(isAuth)));
    }

    logOut() {
        this.store.dispatch(action(false, MenuProps(false)));
    }

    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <BrowserRouter>
                <Header title="ОЦРВ" subtitle="ТЕСТОВОЕ ЗАДАНИЕ" menu={ this.store.getState().menu }/>

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ Main }/>
                        <Route path="/news/:id" component={ Article }/>
                        <Route path="/news" component={ News }/>

                        { !this.store.getState().isAuth && <Route path="/login" render={ () => { return <Login signIn={ this.signIn } /> } }/> }
                        { this.store.getState().isAuth && <Route path="/login" render={ () => { return <Redirect to="/profile"/> } }/> }
                        { this.store.getState().isAuth && <Route path="/profile" render={ () => { return <Profile logOut={ this.logOut } /> } }/> }
                        { !this.store.getState().isAuth && <Route path="/profile" render={ () => { return <Redirect to="/login"/> } }/> }

                        <Route path="*" component={ NotFound }/>
                    </Switch>
                </div>

                <Footer title="&copy; Сергей Ущанский" menu={ this.store.getState().menu } />
            </BrowserRouter>
        )
    }
};
