import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ErrorBoundary } from '../../src/classes/ErrorBoundary';

describe('ErrorBoundary', () => {
    let wrapper;
    let shallow;
    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(<ErrorBoundary
            classes={{}}
        />);   

        wrapper.setState({ errorData: { componentStack: 'div.form.input stack test...' } });
        wrapper.setState({ error: 'Throwing an error...' });
        wrapper.setState({ errorInfo: 'An unexpected error...' });
        wrapper.update();
    });

    afterAll(() => {
        wrapper.detach();
    }); 

    test('Should contain a <Paper />', () => {
        expect(wrapper.state('errorInfo')).toEqual('An unexpected error...');
        expect(wrapper.find(Paper)).toHaveLength(1);
     });

     test('Should contain a <Typography />', () => {
         expect(wrapper.find(Typography)).toHaveLength(3);
     });

     test('Should contain a <details />', () => {
         expect(wrapper.find('details')).toHaveLength(1);
     });

     test('Test CatchingError', () => { 
         const errorDescription = wrapper.find({ variant: 'subtitle1' });
         const findTypo0 = wrapper.find(Typography).at(0).children().text();
         const findTypo1 = wrapper.find(Typography).at(1).children().text();
         const findTypo2 = wrapper.find(Typography).at(2).children().text();

         expect(errorDescription).toHaveLength(1);
         expect(findTypo0.lenght > 0);
         expect(findTypo1).toEqual(wrapper.state('error'));
         expect(findTypo2).toEqual(wrapper.state('errorData').componentStack);
     });
});