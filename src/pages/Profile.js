import React from 'react';

export default function(props) {
    return (
        <div className="page-align">
            <h2>Профиль</h2>
            <button className="logout" onClick={ props.logOut }>Выйти</button>
        </div>
    )
}