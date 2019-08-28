import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: this.props.inputs,
            message: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let message = this.props.handleSubmit(this.state.inputs);

        if (message) {
            this.setState({ message: message });
        }
    }

    handleChange(event) {
        let state = this.state;
        state.inputs[event.target.id].value = event.target.value;

        this.setState(state);
    }

    render() {
        return (
            <form className={ this.props.className } onSubmit={ this.handleSubmit }>
                <span>{ this.state.message }</span>
                {
                    this.state.inputs.map((input, index) => {
                        return <Input
                            key={ index }
                            id={ index }
                            name={ input.name }
                            value={ input.value }
                            type={ input.type }
                            required={ input.required }
                            title={ input.title }
                            handleChange={ this.handleChange }
                        />
                    })
                }

                <button type="submit" className="submit">{ this.props.submit }</button>
            </form>
        )
    }
}