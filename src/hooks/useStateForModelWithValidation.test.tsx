import * as React from 'react';
import { useStateForModelWithValidation } from './useStateForModelWithValidation';
import { render } from '@testing-library/react';

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
            <span>{error.Comment}</span>
            <button type="submit" disabled={!isValid} onClick={_onClick}>
                Submit
            </button>
        </>
    );
};

describe('Tests for useStateForModelWithValidation hook', () => {
    const { getByText, getByTestId } = render(<TestComponent />);
    it('Renders a form that uses the hook', () => {
        const input = getByTestId('Comment');
        const button = getByText('Submit');
        const error = getByText('There is an error');
        expect(input).toBeTruthy();
        expect((input as HTMLInputElement).value).toBe('');
        expect(button).toBeTruthy();
        expect((button as HTMLButtonElement).disabled).toBeTruthy();
        expect(error.textContent).toBe('There is an error');
    });
});
