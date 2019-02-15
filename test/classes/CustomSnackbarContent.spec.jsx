import * as React from 'react';
import context from '../dataSource/__mocks__/TestContextHelper';
import createShallow from '@material-ui/core/test-utils/createShallow';
import GlobalSnackbar from '../../src/classes/GlobalSnackbar'

describe('ConfirmationDialog', () => {
    let wrapper;
    let shallow;
    beforeEach(() => {
        jest.resetModules();
        shallow = createShallow({ dive: true });
        wrapper = shallow(<GlobalSnackbar
            message='Something happend and you are seeing this message'
            type='info'
            onClose={context.actions.onClose}
            open={true}
        />);
    });

    test('Should contain a <Snackbar />', () => {
        expect(wrapper.find('Snackbar')).toHaveLength(1);
    });
});