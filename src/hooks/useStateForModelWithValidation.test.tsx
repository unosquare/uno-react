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
    const [model, onChange, isValid, error] = useStateForModelWithValidation({ Comment: '' }, validationsComment, 0);
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
        const error = getByTestId('error');
        expect(input).toHaveValue('');
        expect(button).toBeDisabled();
        expect(error).toHaveTextContent('');
    });
    it('Add text, error does not exist', () => {
        // Arrange
        const { getByText, getByTestId } = render(<TestComponent />);
        const input = getByTestId('Comment');
        const button = getByText('Submit');
        const error = getByTestId('error');
        
        // Act
        userEvent.type(input, 'Simio is watching');
        
        // Assert
        expect(input).toHaveValue('Simio is watching');
        expect(error).toHaveTextContent('');
        expect(button).not.toBeDisabled();
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
