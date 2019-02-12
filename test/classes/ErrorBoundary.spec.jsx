import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ErrorBoundary from '../../src/classes/ErrorBoundary';

describe('ErrorBoundary', () => {
    let wrapper;
    let shallow;
    beforeEach(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(<ErrorBoundary />);        
    });

    test('Should contain a <Paper />', () => {
        console.log(wrapper.debug());
        wrapper.setState({ error: 'Throwing an error...' });
        wrapper.setState({ errorInfo: 'An unexpected error...' });
        wrapper.update();
        expect(wrapper.state('errorInfo')).toEqual('An unexpected error...');
        console.log(wrapper.debug());
        console.log(wrapper.debug());
        expect(wrapper.find(Paper)).toHaveLength(1);
     });

    // test('Should contain a <Typography />', () => {
    //     expect(wrapper.find(Typography)).toHaveLength(3);
    // });

    // test('Should contain a <details />', () => {
    //     expect(wrapper.find('details')).toHaveLength(1);
    // });

    
    // test('Test CatchingError', () => { 
    //     const errorDescription = wrapper.find({ variant: 'subtitle1' });
    //     expect(errorDescription).toHaveLength(1);
    //     expect(errorDescription.children()).toHaveLength(0);

        
    //     expect(errorDescription.children()).toHaveLength(1);
    // });
});