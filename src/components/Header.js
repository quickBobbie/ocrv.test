import React from 'react';
import Menu from './Menu';

export default function(props) {
    return (
        <header>
            <h1>
                { props.title }
                <span>{ props.subtitle }</span>
            </h1>
            <Menu className="header_menu" items={ props.menu } />
        </header>
    )
}