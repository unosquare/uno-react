[![npm version](https://badge.fury.io/js/uno-react.svg)](https://badge.fury.io/js/uno-react)

# uno-react
Common functions and hooks for React.

```bash
> npm i uno-react
```

## Hooks

### `useStateForModel`

Similar to `useState` but with a twist. The setter function can merge another object in the state or when the input is `Input Event` read the `target` property and populate by `name` and `value`.

```javascript
const myComponent = () => {
    const [ model, handleChange ] = useStateForModel({
        id: 1,
        name: 'Mario Di Vece'
    });

    const onClick = () => handleChange({name: 'Geo Perez'});

    return (
        <div>
        <h1>{model.id} - {model.name}</h1>

        <input onChange={handleChange} name="name" />
        <button onClick={onClick}>Set Name</button>
        </div>
    );
};
```

### `useStateForField`
The easiest way to create a new state variable using hooks, it automatically takes the `target` property and populate the `variable` with the `value` when `set method` is called.

```javascript
const myComponent = () => {
    const [ variable, setMethod ] = useStateForField('');
    
    return (
        <div>
            <ValidatorForm>
                <TextField
                    value={variable}
                    onChange={setMethod}
                />
            </ValidatorForm>
        </div>
    );
}
```

## Classes

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)
