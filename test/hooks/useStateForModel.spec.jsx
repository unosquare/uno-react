import * as React from 'react';
import useStateForModel from '../../src/hooks/useStateForModel';
import TextField from '@material-ui/core/TextField';
import createShallow from '@material-ui/core/test-utils/createShallow';

describe('useStateForModel', () => {
    let shallow;
    const [ model, handleChange ] = useStateForModel({
        id: 1,
        name: 'Mario Di Vece'
    });

    beforeEach(() => {
        jest.resetModules();      
        shallow = createShallow();
    });
   

    test('Should the model change to {id: 1, name: Mario Di Vece}', () => {
        handleChange( { name: 'Geo Perez' } );
        expect(model.name).toBe('Geo Perez');
        expect(model.id).toBe(1);
    });

    expect('Should respond to onChange event', () => {
        const wrapper = shallow(<TextField onChange={handleChange}/>);
        const input = wrapper.find('input');
        input.simulate('change', { target: { name: 'name', value: 'Ana Lizardi' } });

        expect(model.name).toBe('Ana Lizardi');
    });
});