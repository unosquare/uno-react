import * as React from 'react';
import { useStateForModelWithValidation } from './useStateForModelWithValidation';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const validationsComment = (propName: string, propValue: any) => {
    switch (propName) {
        case 'Comment':
            return propValue && propValue.length > 0 ? '' : 'There is an error';
        default:
            return '';
    }
};

const TestComponent: React.FunctionComponent = () => {
    const [model, onChange, isValid, error] = useStateForModelWithValidation({ Comment: '' }, validationsComment);
    const _onClick = (event: any) => {
        return 'I have been submitted';
    };
    const onChangeComment = (event: any) => {
        onChange(event);
    };
    return (
        <>
            <input type="text" data-testid="Comment" name="Comment" value={model.Comment} onChange={onChangeComment} />
            <span data-testid="error">{error.Comment}</span>
            <button type="submit" disabled={!isValid} onClick={_onClick}>
                Submit
            </button>
        </>
    );
};

describe('Tests for useStateForModelWithValidation hook', () => {
    it('Disabled button, error does not exist', () => {
        const { debug, getByText, getByTestId } = render(<TestComponent />);
        debug();
        const input = getByTestId('Comment');
        const button = getByText('Submit');
        expect(input).toHaveValue('');
        expect(button).toBeDisabled();
    });
    it('Add text, error does not exist', () => {
        const { debug, getByTestId } = render(<TestComponent />);
        debug();
        const input = getByTestId('Comment');
        userEvent.type(input, 'Simio is watching');
        expect(input).toHaveValue('Simio is watching');
    });
    it('Empty input text, error exists', () => {
        const { debug, getByTestId } = render(<TestComponent />);
        debug();
        const input = getByTestId('Comment');
        const error = getByTestId('error');
        userEvent.type(input, 'Simio is watching');
        expect(input).toHaveValue('Simio is watching');
        userEvent.clear(input);
        expect(input).toHaveValue('');
        expect(error).toHaveTextContent('There is an error');
    });
});
