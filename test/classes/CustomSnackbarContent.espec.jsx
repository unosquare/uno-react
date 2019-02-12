import * as React from 'react';
import context from '../dataSource/__mocks__/TestContextHelper';
import createShallow from '@material-ui/core/test-utils/createShallow';
import CustomSnackbarContent from '../../src/classes/CustomSnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';

describe('ConfirmationDialog', () => {
    let wrapper;
    let shallow;
    beforeEach(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(<CustomSnackbarContent
            message='Something happend and you are seeing this message' 
            variant='body2'
            onClose={context.actions.onClose}
        />);
    });

    test('Should contain a <SnackbarContent />', () => {
        expect(wrapper.find(SnackbarContent)).toHaveLength(1);
    });

    test('Should contain a <IconButton />', () => {
        expect(wrapper.find(IconButton)).toHaveLength(1);
    });

    
    test('Test onClose action', () => { 
        const closeButton = wrapper.find( { key: 'close' } );
        expect(closeButton).toHaveLength(1);
        
        closeButton.simulate('click');
        expect(context.actions.onClose).toHaveBeenCalled();
    });
});