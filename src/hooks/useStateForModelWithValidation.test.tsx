import * as React from 'react';
import { useStateForModelWithValidation } from './useStateForModelWithValidation';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const validationsComment = (propName: string, propValue: any) => {
    switch (propName) {
        case 'Comment':
            return propValue && propValue.length > 0 ? '' : 'Error';
        default:
            return '';
    }
};

const TestComponent: React.FunctionComponent = () => {
    const [model, onChange, isValid, error] = useStateForModelWithValidation({ Comment: '' }, validationsComment);
    const _onClick = (event: any) => {
        return 'I have been submitted';
    };
    
    return (
        <>
            <input type="text" data-testid="Comment" name="Comment" value={model.Comment} onChange={onChange} />
            <span data-testid="error">{error.Comment}</span>
            <button type="submit" disabled={!isValid} onClick={_onClick}>
                Submit
            </button>
        </>
    );
};

describe('Tests for useStateForModelWithValidation hook', () => {
    it('Disabled button, error does not exist', () => {
        const { getByText, getByTestId } = render(<TestComponent />);
        const input = getByTestId('Comment');
        const button = getByText('Submit');
        const error = getByTestId('error');

        expect(input).toHaveValue('');
        expect(error).not.toBeEmpty();
        expect(button).toBeDisabled();
    });

    it('Add text, error does not exist', async () => {
        // Arrange
        const { getByText, getByTestId } = render(<TestComponent />);
        const input = getByTestId('Comment');
        const button = getByText('Submit');
        const error = getByTestId('error');
        
        // Act
        await userEvent.type(input, 'Simio is watching');
        
        // Assert
        expect(input).toHaveValue('Simio is watching');
        expect(error).toBeEmpty();
        expect(button).not.toBeDisabled();
    });

    // it('Empty input text, error exists', async () => {
    //     // Arrange
    //     const { getByText, getByTestId } = render(<TestComponent />);
    //     const input = getByTestId('Comment');
    //     const error = getByTestId('error');
    //     const button = getByText('Submit');
        
    //     // Act
    //     await userEvent.type(input, 'Simio is watching');
    //     userEvent.clear(input);

    //     // Assert
    //     expect(input).toHaveValue('');
    //     expect(error).toHaveTextContent('');
    //     expect(button).toBeDisabled();
    // });
});
