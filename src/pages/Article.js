import React from 'react';

export default function (props) {
    return (
        <article>
            <h2>{ props.location.state.title }</h2>
            <p>{ props.location.state.body }</p>
        </article>
    )
}