import React, { Component } from 'react';

export default class ArticlePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <h2>{ this.props.location.state.title }</h2>
                <p>{ this.props.location.state.body }</p>
            </article>
        )
    }
}