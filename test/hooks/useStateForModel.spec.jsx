import * as React from 'react';
import useStateForModel from '../../src/hooks/useStateForModel';
import TextField from '@material-ui/core/TextField';
import createShallow from '@material-ui/core/test-utils/createShallow';

describe('useStateForModel', () => {
    let shallow;
    let model = { id: 1, name: 'Mario Di Vece' };
    const handleChange = jest.fn();    

    beforeEach(() => {
        jest.resetModules();      
        shallow = createShallow();
    });
   

    test('Should the model change to {id: 1, name: Mario Di Vece}', () => {
        handleChange.mockReturnValue({ id: 1, name: 'Geo Perez' })();
        model = handleChange();
        expect(model.name).toBe('Geo Perez');
        expect(model.id).toBe(1);
    });

    test('Should respond to onChange event', () => {
        const wrapper = shallow(<input name = 'name' value={model.name} onChange={handleChange}/>);
        const input = wrapper.find({ name: 'name' });
        input.simulate('change', { target: { value: 'Ana Lizardi' } });
        // console.log(wrapper.debug());
        console.log(input.debug());
        expect(input.value).toBe('Ana Lizardi');
    });
});