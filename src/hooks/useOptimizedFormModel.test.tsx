import * as React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useOptimizedFormModel from './useOptimizedFormModel';
import FormStatus from './FormStatus';
import fetchMock from 'jest-fetch-mock';

type Comment = { Comment: string; CommentId: number; Author: string };

const TestComponent: React.FunctionComponent = () => {
    const saveResponse = jest.fn();
    const getComment = React.useCallback(() => fetch('http://someurl/entity'), []);
    const entityTransform = (response: any) => ({
        ...response,
    });

    const [comment, onPropChange, status, flyingChanges] = useOptimizedFormModel<Comment>(getComment, entityTransform);
    const onSaveClick = () => {
        const commentUpdated = { ...comment, ...flyingChanges() };
        saveResponse(commentUpdated);
    };

    return (
        <>
            <input type="text" data-testid="Comment" name="Comment" value={comment.Comment} onChange={onPropChange} />
            <input
                type="text"
                data-testid="Author"
                name="Author"
                value={comment.Author}
                onChange={(event) => {
                    onPropChange({ Author: event.target.value });
                }}
            />
            <button type="button" onClick={onSaveClick} disabled={status === FormStatus.Loading}>
                Save
            </button>
        </>
    );
};

describe('useOptimizedFormModel', () => {
    beforeEach(() => {
        fetchMock.enableMocks();
        fetchMock.resetMocks();
    });

    it('should try to load entity immediately', async () => {
        fetchMock.mockResponse(JSON.stringify({ data: '12345' }));
        render(<TestComponent />);

        await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));
    });

    it('should update values properly ', async () => {
        fetchMock.mockResponse(JSON.stringify({ data: '12345' }));
        const { getByText, getByTestId } = render(<TestComponent />);

        await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

        const commentInput = getByTestId('Comment');
        const authorInput = getByTestId('Author');
        const button = getByText('Save');

        await userEvent.type(commentInput, 'Comment updated');
        expect(commentInput).toHaveValue('Comment updated');

        await userEvent.type(authorInput, 'Author updated');
        expect(authorInput).toHaveValue('Author updated');

        userEvent.click(button);
        expect(authorInput).toHaveValue('Author updated');
    });
});
