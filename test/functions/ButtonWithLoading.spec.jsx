import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ButtonWithLoading from '../../src/components/ButtonWithLoading';

describe('ButtonWithLoading', () => {
    let wrapper;
    let shallow;
    beforeEach(() => {
        jest.resetModules();
        shallow = createShallow();       
    });

    test('Should appeard the <CircularProgress/> component', () => {
        wrapper = shallow(<ButtonWithLoading isFetching={true} />);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });

    test('Should not appeard the <Button/> component', () => {
        wrapper = shallow(<ButtonWithLoading isFetching={true} />);
        expect(wrapper.find(Button)).toHaveLength(0);
    });
    
    test('Should not appeard the <CircularProgress/> component', () => {
        wrapper = shallow(<ButtonWithLoading />);
        expect(wrapper.find(CircularProgress)).toHaveLength(0);
    });

    test('Should appeard the <Button/> component', () => {
        wrapper = shallow(<ButtonWithLoading />);
        expect(wrapper.find(Button)).toHaveLength(1);
    });    
});