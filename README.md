[![npm version](https://badge.fury.io/js/uno-react.svg)](https://badge.fury.io/js/uno-react)
[![Build Status](https://travis-ci.org/unosquare/uno-react.svg?branch=master)](https://travis-ci.org/unosquare/uno-react)

# uno-react

Common functions, components, HOCs and hooks for React and Material UI.

Table of contents
=================

  * [💾Installation](#installation)
  * [What's in the library](#whats-in-the-library)
    * [Hooks](#hooks)
      * [useStateForModel](#usestateformodel)
      * [useEffectWithLoading](#useeffectwithloading)
      * [useStateForModelWithLoading](#usestateformodelwithloading)
      * [useToggle](#usetoggle)
      * [usePersistedState](#usepersistedstate)
      * [useNow](#usenow)
      * [useResolutionSwitch](#useresolutionswitch)
    * [Components](#components)
      * [ErrorBoundary](#errorboundary)
      * [GlobalSnackbar](#globalsnackbar)
    
### Installation

```bash
> npm i uno-react
```

Some components use internally hooks, so you need to work with React ^16.8.0.

## What's in the library

In this section, we present the different components that are available in the uno-react library. Please keep in mind that everything in the library is opt-in. Swan is completely opt-in. It won't force you to use any of its components, classes or methods.

## Hooks

### `useStateForModel`

This hook allows us to keep updated the values of a model that are related to an input, handling the input's `onChange` calls. During the first render the model will have the initialValue.

### Parameters

- `initialValue` **[Object][3]** initial value or initial model.

***Note***: the `handleChange` method will update the model by the target.name event property if it is found, otherwise it will be added to the model.

***Note***: calling the `handleChange` method with an object as a param instead of an event, the object will be merged with the current model.

### Example

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

Returns [model, handleChange]

- model: **[Object][3]** the current model, that keeps the information updated.
- handleChange: **[Function][8]** this function should be called on the onChange event.

### `useStateForField`

Similar to `useStateForModel` this hook helps us to keep the value of a variable that is related to an input, but in this case `useStateForField` works just with one value.

### Parameters

- `initialValue` **[Object][3]** initial value or initial model.

***Note***: In contrast with `useStateForModel` in this hook the function `handleChange` can not be called with an object as a param, to handle a change manually we have the setField function.

### Example

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

Returns [getField, handleChange, setField]

- getField: **[Object][3]** the current value, that keeps the information updated.
- handleChange: **[Function][8]** this function should be called on the onChange event.
- setField: **[Function][8]** this function helps us to update the value manually.

### `useEffectWithLoading`

This hook handles the process of getting a external resource like a fetch or reading a file, and prevent updating the react state if the component is unmounted before the resource is loaded.

### Parameters

- `effect` **[Function][8]** the function that will get the data.

- `initialValue` **[Object][3]** initial value or initial model.

- `inputs` **[Array][1]&lt;[string][2] | [Object][3] | [number][5] | [boolean][4]>** an array of variables that the effect depends on.

***note***: The `effect` function that is given as a parameter will be run when the component has been mounted and when any `inputs` item change.

### Example

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

Returns [getter, isLoading]

- getter: **[Object][3]** the value that is returned by the `effect` function when the data has been loaded, otherwise the initialValue.
- isLoading: **[boolean][4]** a flag that indicates if the data has been fetched or not.

### `useStateForModelWithLoading`

This hook allows us to keep updated the values of a model that are related to an input, handling the input's `onChange` calls like `useStateForModel` does, but in additino this hook allows us to load the data from an external resource.

This hook is a mix between `useStateForModel` and `useEffectWithLoading`, you can use it just as `useStateForModel` and handle the loading with the extra variable returned `isLoading`.

### Parameters

- `effect` **[Function][8]** the function that will get the data.

- `initialValue` **[Object][3]** initial value or initial model.

- `inputs` **[Array][1]&lt;[string][2] | [Object][3] | [number][5] | [boolean][4]>** an array of variables that the effect depends on.

***note***: The `effect` function that is given as a parameter will be run when the component has been mounted and when any `inputs` item change.

### Example

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
Returns [getter, isLoading, handleChange]

- getter: **[Object][3]** the value that is returned by the `effect` function when the data has been loaded, otherwise the initialValue.
- isLoading: **[boolean][4]** a flag that indicates if the data has been fetched or not.
- handleChange: **[Function][8]** this function should be called on the onChange event.

### `useToggle`
This hook handles the switch on boolean `values`. The value will be toggled each time the function toggle is called.

### Parameters

- `defaultValue` **[boolean][4]** default or initial value.

### Example

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

Returns [getField, toggleField]

- getField: **[boolean][4]** the current value.
- toggleField: **[Function][8]** the function that toggles the value.

### `usePersistedState`

This hook allows us to `set` and `get` values from the `localStorage`.

### Parameters

- `defaultValue` **[string][2]** the default values, this value will be added to the `localStorage` and returned if the key is not found.

- `keyName` **[string][2]** the key-id to save the value on the `localStorage`.

***note***: the defaultValue just will be setted and returned if the keyName is not on the `localStorage`, otherwise the value found will be returned.

### Example

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

Returns [getter, setter]

- getter: **[string][2]** the current value
- setter: **[Function][8]** the function to set the value. ***note***: This **[Function][8]** expects an **[Object][3]** as a parameter.

### `useNow`

This hook keep the current **[Date][7]** object updated. The `value` will be updated each second.

***note***: the time value is a javascript **[Date][7]** instance, you can manipulate it as any other javascript **[Date][7]** object.

### Example

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

Returns **[Date][7]** the current date.

### `useResolutionSwitch`

This hook listen to the resize window event and keep the `isResolution` flag updated.

### Parameters

- `outerWidth` **[number][5]** Size limit (px). ***defaultValue***: 1000

- `timeout` **[number][5]** Debounder timeout, the variable will change after this debounder time (ms). ***defaultValue***: 500

### Example

```javascript

    const myComponent = () => {
        const outerWidth = 500;
        const timeout = 1000;
        const [size] = useResolutionSwitch(outerWidth, timeout);
        
        return (<h1>{size ? 'mobile' : 'desktop'}</h1>);
    };
```

Returns **[boolean][4]** true when window outerSize is smaller than the outerWith passed as a parameter.

## Components

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)

### `GlobalSnackbar`
A global snackbar instance to display messages and errors. You just need to add it to your `Context` and pass it which message you want to display. You will need a Material-UI Theme in order to change the colors. It is available in mobile version too.

### Parameters

- `message` **[Object][3]** with messageText **[string][2]** and messageType **[string][2]**

- `timeout` **[number][5]** miliseconds after the snackbar will automatically hide ***defaultValue***: 2500.

- `mobile` **[boolean][4]** if true, it displays a smaller and center-aligned snackbar. ***defaultValue***: false.

### Example

```javascript
const myContext = () => {
    const [message, handleChange] = useStateForModel({
        messageText: 'Hey!', // Message to display
        messageType: 'info' // success, warning, error or info.
    });

    return (
    <GlobalSnackbar
        message={message}
        seconds={3000}
        mobile={false}
    />
    )
};
    // 'info' type uses Theme's primary main color
    // 'error' type uses Theme's error main color
```

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function
