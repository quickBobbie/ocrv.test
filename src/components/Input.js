import React from 'react';

export default function(props) {
    return (
        <div className="input">
            <input
                type={ props.type }
                required={ props.required }
                name={ props.name }
                value={ props.value }
                id={ props.id }
                onChange={ props.handleChange }
            />
            <label>{ props.title }</label>
        </div>
    )
}