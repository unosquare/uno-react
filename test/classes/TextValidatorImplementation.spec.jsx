import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import TextValidatorImplementation from './TextValidatorImplementation';
import TextValidator from '../../src/classes/TextValidator';

describe('TextValidatorImplementation', () => {
    let wrapper;
    let shallow;

    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(<TextValidatorImplementation />);
        wrapper.setState({ anyProperty: 'Some content' });
        wrapper.update();
    });

    afterAll(() => {
        wrapper.detach();
    }); 

    test('Should contain a <TextValidator />', () => {
        expect(wrapper.find(TextValidator)).toHaveLength(1);
    });

    test('Test OnChangeAction', () => {
        const originalValue = wrapper.state('anyProperty');
        const inputChange = wrapper.find(TextValidator);
        expect(inputChange).toHaveLength(1);

        inputChange.simulate('change', { target: { value: 'New text added' } });
        expect(wrapper.state('anyProperty')).not.toEqual(originalValue);
    });
});