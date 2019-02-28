import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import Typography from '@material-ui/core/Typography';
import { Title } from '../../src/components/Title';

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