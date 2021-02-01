import { act, renderHook } from '@testing-library/react-hooks';
import { useStateForModel } from './useStateForModel';

test('Should keep updated the values of a model that are related to an input(event) handling the inputs onChange calls', () => {
    const initialValue = {
        id: 1,
        name: 'John',
        lastName: 'Doe',
    };
    const { result } = renderHook(() => useStateForModel(initialValue));

    const eventInputName = {
        target: { value: 'value name', name: 'name' },
    } as React.ChangeEvent<HTMLInputElement>;

    const eventInputLastName = {
        target: { value: 'value last name', name: 'lastName' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
        result.current[1](eventInputName);
    });
    act(() => {
        result.current[1](eventInputLastName);
    });
    initialValue.name = 'value name';
    initialValue.lastName = 'value last name';

    expect(result.current[0]).toStrictEqual(initialValue);
});

test('Should keep updated the values of a model that are related to an input(event) handling the inputs onChange calls adding new property if does not exist.', () => {
    const initialValue = {
        id: 1,
        name: 'John',
        lastName: 'Doe',
    };
    const { result } = renderHook(() => useStateForModel(initialValue));

    const eventInputName = {
        target: { value: 'value name', name: 'name' },
    } as React.ChangeEvent<HTMLInputElement>;

    const eventInputLastName = {
        bubbles: false,
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
        result.current[1](eventInputName);
    });
    act(() => {
        result.current[1](eventInputLastName);
    });
    initialValue.name = 'value name';
    initialValue['bubbles'] = false;

    expect(result.current[0]).toStrictEqual(initialValue);
});
