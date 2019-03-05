[![npm version](https://badge.fury.io/js/uno-react.svg)](https://badge.fury.io/js/uno-react)
[![Build Status](https://travis-ci.org/unosquare/uno-react.svg?branch=master)](https://travis-ci.org/unosquare/uno-react)

# uno-react

Common functions, components, HOCs and hooks for React and Material UI.

```bash
> npm i uno-react
```

Some components use internally hooks, so you need to work with React ^16.8.0.


## Hooks

### `useStateForModel`

This hook allows us to keep updated the values of a model that are related to an input, handling the input's `onChange` calls. During the first render the model will have the initialValue.

@param {object} initialValue dafault or initial model.

@returns [model, handleChange]

* model: {object} the current model, that keeps the information updated.
* handleChange: {function} this function should be called on the onChange event.

***Note***: the `handleChange` method will update the model by the target.name event property if it is found, otherwise it will be added to the model.

***Note***: calling the `handleChange` method with an object as a param instead of an event, the object will be merged with the current model.

```javascript
const myComponent = () => {
    const [ model, handleChange ] = useStateForModel({
        id: 1,
        name: 'Mario',
        lastName: 'Di Vece',
    });

    const changeName = () => handleChange({name: 'Mario'});

    return (
        <div>
            <h1>{model.id} - {model.name} - {model.lastName}</h1>
            <input 
                name="name"
                onChange={handleChange} 
                value={model.name}
            />
            <input 
                name="lastName"
                onChange={handleChange}
                value={model.lastName}
            />
            <button onClick={changeName}>Reset Name</button>
        </div>
    );
};
```

### `useStateForField`

Similar to `useStateForModel` this hook helps us to keep the value of a variable that is related to an input, but in this case `useStateForField` works just with one value.

@param {object} initialValue dafault or initial value.

@returns [getField, handleChange, setField]

* getField: {object} the current value, that keeps the information updated.
* handleChange: {function} this function should be called on the onChange event.
* setField: {function} this function helps us to update the value manually.

***Note***: In contrast with `useStateForModel` in this hook the function `handleChange` can not be called with an object as a param, to handle a change manually we have the setField function.

```javascript
const myComponent = () => {
    const [ myValue, handleChange, setMyValue ] = useStateForField('Unosquare');
    
    const reset = () => setMyValue('Unosquare');
    
    return (
        <div>
            <h1>{myValue}</h1>
            <input
                value={myValue}
                onChange={handleChange}
            />
            <button onClick={reset}>Reset value</button>
        </div>
    );
};
```

### `useEffectWithLoading`

This hook handles the process of getting a external resource like a fetch or reading a file, and prevent updating the react state if the component is unmounted before the resource is loaded.

@param effect  {function} the function that will get the data.

@param initialValue {object} default or initial value.

@param inputs {[]} an array of variables that the effect depends on.

@returns [getter, isLoading]

* getter: {object} the value that was returned by the `effect` function when the data has been loaded, otherwise the initialValue.
* isLoading: {boolean} a flag that indicates if the data has been fetched or not.

***note***: The `effect` function that is given as a parameter will be run when the component has been mounted and when any `inputs` item change.

```javascript
const myComponent = ({ myId }) => {
    const myDefault = '';
    const inputs = [];
    const [ myData, isLoading ] = useEffectWithLoading(getMyData(myId), myDefault, inputs);
   
   return (
        <div>
            {isLoading ?
                <div class='loader'>Loading ...</div>
                :
                <form>
                    <label>
                        <h1>Data loaded</h1>
                        {myData}
                    </label>
                <form>}
        </div>
    );
};
```

### `useStateForModelWithLoading`

This hook allows us to keep updated the values of a model that are related to an input, handling the input's `onChange` calls like `useStateForModel` does, but in additino this hook allows us to load the data from an external resource.

This hook is a mix between `useStateForModel` and `useEffectWithLoading`, you can use it just as `useStateForModel` and handle the loading with the extra variable returned `isLoading`.

@param effect  {function} the function that will get the data.

@param {object} initialValue dafault or initial model.

@param inputs {[]} an array of variables that the effect depends on.

@returns [getter, isLoading, handleChange]

* getter: {object} the value that was returned by the `effect` function when the data has been loaded, otherwise the initialValue.
* isLoading: {boolean} a flag that indicates if the data has been fetched or not.
* handleChange: {function} this function should be called on the onChange event.

***note***: The `effect` function that is given as a parameter will be run when the component has been mounted and when any `inputs` item change.

```javascript
const myComponent = () => {
    const myModel = {
        name: 'my test name',
        city: 'my test city'
    };
    const [mySearchString, handleChangeSearchString] = useStateForField('');
    const [ data, isLoading, handleChange ] = useStateForModelWithLoading(getMyData(mySearchString), myModel, [mySearchString]);
    
    return (
        <div>
            <input 
                onChange={handleChangeSearchString} 
                value={mySearchString}>
            </input>
            {isLoading ?
                <div class='loader'>Loading ...</div>
                :
                <form>
                    <input
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input
                        value={data.city}
                        onChange={handleChange}
                    />
                </form>}
        </div>
    );
};
```

### `useToggle`
This hook handles the switch on boolean `values`. The value will be toggled each time the function toggle is called.

@params defaultValue {boolean} default or initial value.
@returns [getField, toggleField]

* getField: {boolean} current value.
* toggleField: {function} this function that toggle the value.

```javascript
const myComponent = () => {
    const defaultValue = false;
    const [ myValue, toggle ] = useToggleStateForField(defaultValue);
    
    return (
        <div>
            <h1> {myValue ? 'true' : 'false'}</h1 >
            <button
                onClick={toggle}
            >
                Toggle
            </button>
        </div >
    );
};
```

### `useToggleStateForField`
Keep it simple to switch `values` in your boolean `variables` using hooks. Just sending a `default` value and change it each time you call your `hook` method.

```javascript
const myComponent = () => {
    const defaultValue = false;
    const [ myValue, handleChange ] = useToggleStateForField(defaultValue);
    
    function async handleSubmit(e) => {
        handleChange();
        await callMyActionMethod();
        handleChange();
    };
    
    <div>
        <form
            onSubmit={handleSubmit}
        >
            <button
                disabled={myValue}
            >
                Save
            </button>
        </form>
    </div>
};
```

### `usePersistedState`

This hook allows us to `set` and `get` values from the `localStorage`.

@param defaultValue {string} the default values, this value will be added to the `localStorage` and returned if the key is not found.

@param keyName {string} the key-id to save the value on the `localStorage`.

@returns [getter, setter]

* getter: {string} the current value
* setter: {function} the function to set the value. ***note***: this function expects an {Object} as a parameter.

***note***: the defaultValue just will be setted and returned if the keyName is not on the `localStorage`, otherwise the value found will be returned.

```javascript
const myComponent = () => {
    const key = 'exampleToken';
    const defaultValue = 'unosquareToken';
    const [token, setToken] = usePersistedState(defaultValue, key);

    const changeValue = () => setToken('1928238475');

    return(
        <div>
            <h1>{token}</h1>
            <button onClick={changeValue}>Change value</button>
        </div>
    );
};

```

### `useNow`
Keep the current date just in one `variable`, without calling `date` method whenever it's needed.

This hoook helps us to keep the current `Date` updated. The `value` will be updated each second.

@returns [time]
* time {Date} the current date.

***note***: the time value is a javascript Date instance, you can manipulate it as any other javascript Date object.

```javascript
const myComponent = () => {
    const [now] = useNow();
    
    return (
        <div>
            Seconds: {now.getSeconds()}
        </div>
    );
};
```

## Components

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)

### `GlobalSnackbar`
A global snackbar instance to display messages and errors. You just need to add it to your `Context ` and pass it which message you want to display.  You will need a Material-UI Theme in order to change the colors. It is available in mobile version too.

```javascript
const myContext = () => {
    const [message, handleChange] = useStateForModel({
        messageText: 'Hey!', // Message to display
        messageType: 'info' // success, warning, error or info.
    });

    return (
    <GlobalSnackbar
        message={message}
        seconds={3000} // By default it's 2500 miliseconds, the Snackbar will hide after it.
        mobile={false} // By default it's false.
    />
    )
};
    // 'info' type uses Theme's primary main color
    // 'error' type uses Theme's error main color
```
