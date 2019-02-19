import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import Typography from '@material-ui/core/Typography';
import { AppTitle } from '../../src/classes/Title';
import { Title } from '../../src/classes/Title';

describe('TextValidator', () => {
    let wrapper;
    let shallow;
    
    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(
            <Title
                prefix='test'
                suffix='test'
                value=''
                titleClass=''
            />
        );
    });

    afterAll(() => {
        wrapper.detach();
    });

    test('Should contain a <Typography />', () => {
        expect(wrapper.find(Typography)).toHaveLength(1);
    });
});