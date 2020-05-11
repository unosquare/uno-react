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
    const [model, onChange, isValid, error] = useStateForModelWithValidation(
        { Comment: '' },
        validationsComment,
    );
    const _onClick = (event: any) => { return 'I have been submitted'; };
    return (
        <>
            <input type='text' name='Comment' value={model.Comment} onChange={onChange}/>
            <span>{error.Comment}</span>
            <button type='submit' disabled={!isValid} onClick={_onClick}>Submit</button>
        </>
    );
};

describe('Tests for useStateForModelWithValidation hook', () => {
    const { getByText } = render(<TestComponent />);
    it('Renders a form that uses the hook', () => {
        const errorMessage = getByText('Submit');
        expect(errorMessage).toBeTruthy();
    });
});
