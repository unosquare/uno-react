import * as React from 'react';
import TextValidator from '../../src/classes/TextValidator';

export default class TextValidatorImplementation extends React.Component {
    state = {
        anyProperty: ''
    }

    handleChange = e => {
        this.setState({ anyProperty: e.target.value });
    }

    render(){
        return (
            <TextValidator
            id='anyProperty'
            label='Any Property'
            name='AnyProperty'
            value={this.state.anyProperty}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={[
                'This field is required',
            ]}
            autoFocus={true}
        />
        );
    }
}