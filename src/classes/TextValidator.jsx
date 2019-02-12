/* eslint-disable no-unused-vars */
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import { ValidatorComponent } from 'react-form-validator-core';

export default class TextValidator extends ValidatorComponent {
    render() {
        const { error,
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            withRequiredValidator,
            ...rest } = this.props;
        const { isValid } = this.state;

        return (
            <TextField
                {...rest}
                error={!isValid || error}
                helperText={(!isValid && this.getErrorMessage()) || helperText}
            />
        );
    }
}
