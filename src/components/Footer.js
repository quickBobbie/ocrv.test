import React from 'react';
import Menu from './Menu';

export default function(props) {
    return (
        <footer>
            <h5>{ props.title }</h5>
            <Menu className="footer_menu" items={ props.menu } />
        </footer>
    )
}