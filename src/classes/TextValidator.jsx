/* eslint-disable no-unused-vars */
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import humanize from '../functions/humanize';

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
            label,
            id,
            ...rest } = this.props;
        const { isValid } = this.state;

        return (
            <TextField
                {...rest}
                label={label || humanize(id)}
                error={!isValid || error}
                helperText={(!isValid && this.getErrorMessage()) || helperText}
            />
        );
    }
}