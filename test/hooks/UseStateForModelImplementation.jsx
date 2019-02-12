import * as React from 'react';
import { useStateForModel } from '../../src/hooks/useStateForModel';

const UseStateForModelImplementation = () => {
    const [model, handleChange] = useStateForModel({
        id: 1,
        name: 'Mario Di Vece'
    });

    const onClick = () => handleChange({ name: 'Geo Perez' });

    return (
        <div>
            <h1>{model.id} - {model.name}</h1>
            <input onChange={handleChange} value={model.name} />
            <button onClick={onClick}>Change name</button>
        </div>
    );
};

export default UseStateForModelImplementation;
