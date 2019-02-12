import * as React from 'react';
import UseStateForModelImplementation from './UseStateForModelImplementation';
import { mount } from 'enzyme';

describe('useStateForModel', () => {
    let wrapper;
    beforeEach(() => {
        jest.resetModules();
        wrapper = mount(<UseStateForModelImplementation />);
    });

    test('Should contain a <input />', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

    test('Should contain a <button />', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    // test('onChange event', () => {
    //     const input = wrapper.find('input');
    //     console.log(input.debug());
    //     input.simulate('change', { target: { value: 'Ana Lizardi' } });
    //     console.log(input.debug());
    //     expect(input.value).toBe('Ana Lizardi');
    // });

    // test('onClick event', () => {
    //     const input = wrapper.find('input');
    //     console.log(input.debug());
    //     const button = wrapper.find('button').first();
    //     button.simulate('click');
    //     console.log(input.debug());
    //     expect(input.value).toBe('Geo Perez');
    // });
});