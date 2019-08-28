import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
    return (
        <nav className={ props.className }>
            <ul>
                {
                    props.items.map((item, index) => {
                        return <li key={ index }><Link to={ item.href }>{ item.title }</Link></li>
                    })
                }
            </ul>
        </nav>
    )
}