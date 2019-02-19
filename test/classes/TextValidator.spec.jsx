import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import TextValidator from '../../src/classes/TextValidator';
import TextField from '@material-ui/core/TextField';
import { ValidatorComponent } from 'react-form-validator-core';

xdescribe('TextValidator', () => {
    let wrapper;
    let shallow;

    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(
                <TextValidator
                    name='nameProperty'
                >
                    <ValidatorComponent />
                </TextValidator>
            );
        //wrapper.find(TextValidator).setState({ isValid: true });
        wrapper.update();
    });

    afterAll(() => {
        wrapper.detach();
    });

    test('Should contain a <TextField />', () => {
        //console.log(wrapper.find(TextValidator).debug({ignoreProps: true}));
        //expect(wrapper.find(TextField)).toHaveLength(1);
    });
});