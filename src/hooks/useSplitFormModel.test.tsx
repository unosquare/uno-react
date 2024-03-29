/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import useOptimizedFormModel from './useOptimizedFormModel';
import FormStatus from './FormStatus';
import useSplitFormModel from './useSplitFormModel';

type Comment = { Comment: string; CommentId: number; Author: string };
type PartialComment = Pick<Comment, 'Comment'>;

const TestComponent: React.FunctionComponent = () => {
    const onSaveClick = jest.fn();
    const getComment = React.useCallback(() => fetch('http://someurl/entity'), []);
    const entityTransform = (response: any) => ({
        ...response,
    });

    const validationsComment = (propName: string, propValue: any) => {
        if (propName === 'Comment') return propValue && propValue.length > 8 ? '' : 'Error';

        return '';
    };

    const [comment, onPropChange, status] = useOptimizedFormModel<Comment>(getComment, entityTransform);
    const preModel: PartialComment = {
        Comment: '',
    };

    const [partialModel, onUpdate, _, errors] = useSplitFormModel(
        preModel,
        comment,
        validationsComment,
        onPropChange,
        status,
    );

    return (
        <>
            <input type="text" data-testid="Comment" name="Comment" value={partialModel.Comment} onChange={onUpdate} />
            <span data-testid="error">{errors.Comment}</span>
            <button type="button" onClick={onSaveClick} disabled={status === FormStatus.Loading}>
                Save
            </button>
        </>
    );
};

describe('useSplitFormModel', () => {
    beforeEach(() => {
        fetchMock.enableMocks();
        fetchMock.resetMocks();
    });

    it('should try to load entity immediately', async () => {
        fetchMock.mockResponse(JSON.stringify({ Comment: '12345' }));
        render(<TestComponent />);

        await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));
    });

    it('should update values properly ', async () => {
        fetchMock.mockResponse(JSON.stringify({ Comment: '12345' }));
        const { getByText, getByTestId } = render(<TestComponent />);

        await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

        const commentInput = getByTestId('Comment');
        const button = getByText('Save');

        await userEvent.type(commentInput, 'Comment updated');
        expect(commentInput).toHaveValue('12345Comment updated');

        userEvent.click(button);
        expect(commentInput).toHaveValue('12345Comment updated');
    });

    it('should show errors when validation fails ', async () => {
        fetchMock.mockResponse(JSON.stringify({ Comment: '' }));
        const { getByTestId } = render(<TestComponent />);

        await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

        const commentInput = getByTestId('Comment');
        const error = getByTestId('error');

        await userEvent.type(commentInput, 'Error');
        expect(error).not.toBeEmptyDOMElement();
    });
});
