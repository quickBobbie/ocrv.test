import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

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

        this.state = {
            isAuth: localStorage.getItem("isAuth") === "true",
            menu: MenuProps(localStorage.getItem("isAuth") === "true")
        };

        this.signIn = this.signIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    signIn(isAuth) {
        localStorage.setItem("isAuth", isAuth);
        this.setState({
            isAuth: isAuth,
            menu: MenuProps(isAuth)
        });
    }

    logOut() {
        localStorage.setItem("isAuth", false);
        this.setState({
            isAuth: false,
            menu: MenuProps(false)
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Header title="OCRV" subtitle="TEST APP" menu={ this.state.menu }/>

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ Main }/>
                        <Route path="/news/:id" component={ Article }/>
                        <Route path="/news" component={ News }/>

                        { !this.state.isAuth && <Route path="/login" render={ () => { return <Login signIn={ this.signIn } /> } }/> }
                        { this.state.isAuth && <Route path="/login" render={ () => { return <Redirect to="/profile"/> } }/> }
                        { this.state.isAuth && <Route path="/profile" render={ () => { return <Profile logOut={ this.logOut } /> } }/> }
                        { !this.state.isAuth && <Route path="/profile" render={ () => { return <Redirect to="/login"/> } }/> }

                        <Route path="*" component={ NotFound }/>
                    </Switch>
                </div>

                <Footer title="&copy; Sergey Ushchanskiy" menu={ this.state.menu } />
            </BrowserRouter>
        )
    }
};
