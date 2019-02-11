import * as React from 'react';
import UseStateForModelImplementation from './UseStateForModelImplementation';
import { shallow } from 'enzyme';

describe('useStateForModel', () => {
    let wrapper;
    beforeEach(() => {
        jest.resetModules();
        wrapper = shallow(<UseStateForModelImplementation />);
    });

    test('Should contain a <input />', () => {
        console.log(wrapper);
        console.log(wrapper.debug());
        expect(wrapper.find('input')).toHaveLength(1);
    });

    test('Should contain a <button />', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    // test('onChange event', () => {
    //     const input = wrapper.find('input').first();
    //     console.log(input.Debug());
    //     const inputx = wrapper.find('input');
    //     console.log(inputx.Debug());
    //     input.simulate('change',
    //         {
    //             target: {
    //                 name: 'name',
    //                 value: 'Ana Lizardi'
    //             }
    //         }
    //     );
    //     expect(input.value).toBe('Ana Lizardi');
    // });

    // test('onClick event', () => {
    //     const button = wrapper.find('button').first();
    //     button.simulate('click');
    //     expect(input.value).toBe('Geo Perez');
    // });
});