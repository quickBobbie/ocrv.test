import React from 'react';
import Input from './Input';

export default function(props) {
    return (
        <form className={ props.className } onSubmit={ props.handleSubmit }>
            <span className={ props.className + "_message" }>{ props.state.message }</span>
            {
                Object.keys(props.state.inputs).map((input, index) => {
                    input = props.state.inputs[input];
                    return <Input
                        key={ index }
                        name={ input.name }
                        value={ input.value }
                        type={ input.type }
                        required={ input.required }
                        title={ input.title }
                        handleChange={ props.handleChange }
                    />
                })
            }

            <button type="submit" className="submit">{ props.submit }</button>
        </form>
    )
}