import * as React from 'react';
import { useStateForModelWithValidation } from './useStateForModelWithValidation';
import { cleanup, fireEvent, queryByAttribute, render } from '@testing-library/react';

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
    return (
        <>
            <input type="text" data-testid="Comment" name="Comment" value={model.Comment} onChange={onChange} />
            <span>{error.Comment}</span>
            <button type="submit" disabled={!isValid} onClick={_onClick}>
                Submit
            </button>
        </>
    );
};

describe('Tests for useStateForModelWithValidation hook', () => {
    beforeEach(() => {
        cleanup();
    });
    it('Renders a form that uses the hook', () => {
        const { getByText } = render(<TestComponent />);
        const errorMessage = getByText('Submit');
        expect(errorMessage).toBeTruthy();
    });
    it("Changes the model's state", () => {
        const { debug, getByTestId } = render(<TestComponent />);
        const input = getByTestId('Comment');
        fireEvent.change(input, 'I am a comment');
        debug(input);
        expect(input).toHaveValue('I am a comment');
    });
});
