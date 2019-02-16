[![npm version](https://badge.fury.io/js/uno-react.svg)](https://badge.fury.io/js/uno-react)
[![Build Status](https://travis-ci.org/unosquare/uno-react.svg?branch=master)](https://travis-ci.org/unosquare/uno-react)

# uno-react
Common functions, classes, HOCs and hooks for React and Material UI.

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

## Classes

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)
