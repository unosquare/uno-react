[![npm version](https://badge.fury.io/js/uno-react.svg)](https://badge.fury.io/js/uno-react)
[![Build Status](https://travis-ci.org/unosquare/uno-react.svg?branch=master)](https://travis-ci.org/unosquare/uno-react)

# uno-react

*:star: Please star this project if you find it useful!*

Common functions, HOCs and hooks for React.

Table of contents
=================

  * [💾Installation](#installation)
  * [What's in the library](#whats-in-the-library)
    * [Hooks](#hooks)
      * [useStateForModel](#usestateformodel)
      * [useStateForField](#usestateforfield)
      * [useEffectWithLoading](#useeffectwithloading)
      * [useStateForModelWithLoading](#usestateformodelwithloading)
      * [useToggle](#usetoggle)
      * [usePersistedState](#usepersistedstate)
      * [useNow](#usenow)
      * [useResolutionSwitch](#useresolutionswitch)
      * [useEffectWithDebounce](#useeffectwithdebounce)
    * [Hocs](#hocs)
      * [enhanceWithClickOutside](#enhancewithclickoutside)
    * [Functions](#functions)
      * [colorGenerator](#colorgenerator)   
      * [debounce](#debounce)
      * [requestController](#requestcontroller)
      * [createFetchController](#createfetchcontroller)
      * [humanize](#humanize)
      * [toTitleCase](#totitlecase)
      * [validations](#validations)
      * [onEnterKey](#onenterkey)
      * [asyncOnEnterKey](#asynconenterkey)
      
      
## Installation

```bash
> npm i uno-react
```

We are using hooks, so you need to work with React ^16.8.0.

## What's in the library

In this section, we present the different components that are available in the uno-react library. Please keep in mind that everything in the library is opt-in. uno-react is completely opt-in. It won't force you to use any of its components, classes or methods.

## Hooks

### `useStateForModel`

This hook allows us to keep updated the values of a model that are related to an input, handling the input's `onChange` calls. During the first render the model will have the initialValue.

### Parameters

- `initialValue` **[Object][3]** initial value or initial model.

***Note***: the `handleChange` method will update the model by the target.name event property if it is found, otherwise it will be added to the model.

***Note***: calling the `handleChange` method with an object as a param instead of an event, the object will be merged with the current model.

### Returns [model, handleChange]

- model: **[Object][3]** the current model, that keeps the information updated.
- handleChange: **[Function][8]** this function should be called on the onChange event.


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

### `useStateForField`

Similar to `useStateForModel` this hook helps us to keep the value of a variable that is related to an input, but in this case `useStateForField` works just with one value.

### Parameters

- `initialValue` **[Object][3]** initial value or initial model.

***Note***: In contrast with `useStateForModel` in this hook the function `handleChange` can not be called with an object as a param, to handle a change manually we have the setField function.

### Returns [getField, handleChange, setField]

- getField: **[Object][3]** the current value, that keeps the information updated.
- handleChange: **[Function][8]** this function should be called on the onChange event.
- setField: **[Function][8]** this function helps us to update the value manually.

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

### `useEffectWithLoading`

This hook handles the process of getting a external resource like a fetch or reading a file, and prevent updating the react state if the component is unmounted before the resource is loaded.

### Parameters

- `effect` **[Function][8]** the function that will get the data.

- `initialValue` **[Object][3]** initial value or initial model.

- `inputs` **[Array][1]&lt;[string][2] | [Object][3] | [number][5] | [boolean][4]>** an array of variables that the effect depends on.

***note***: The `effect` function that is given as a parameter will be run when the component has been mounted and when any `inputs` item change.

### Returns [getter, isLoading]

- getter: **[Object][3]** the value that is returned by the `effect` function when the data has been loaded, otherwise the initialValue.
- isLoading: **[boolean][4]** a flag that indicates if the data has been fetched or not.

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

### `useStateForModelWithLoading`

This hook allows us to keep updated the values of a model that are related to an input, handling the input's `onChange` calls like `useStateForModel` does, but in additino this hook allows us to load the data from an external resource.

This hook is a mix between `useStateForModel` and `useEffectWithLoading`, you can use it just as `useStateForModel` and handle the loading with the extra variable returned `isLoading`.

### Parameters

- `effect` **[Function][8]** the function that will get the data.

- `initialValue` **[Object][3]** initial value or initial model.

- `inputs` **[Array][1]&lt;[string][2] | [Object][3] | [number][5] | [boolean][4]>** an array of variables that the effect depends on.

***note***: The `effect` function that is given as a parameter will be run when the component has been mounted and when any `inputs` item change.

### Returns [getter, isLoading, handleChange]

- getter: **[Object][3]** the value that is returned by the `effect` function when the data has been loaded, otherwise the initialValue.
- isLoading: **[boolean][4]** a flag that indicates if the data has been fetched or not.
- handleChange: **[Function][8]** this function should be called on the onChange event.

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

### `useToggle`
This hook handles the switch on boolean `values`. The value will be toggled each time the function toggle is called.

### Parameters

- `defaultValue` **[boolean][4]** default or initial value.

### Returns [getField, toggleField]

- getField: **[boolean][4]** the current value.
- toggleField: **[Function][8]** the function that toggles the value.

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

### `usePersistedState`

This hook allows us to `set` and `get` values from the `localStorage`.

### Parameters

- `defaultValue` **[string][2]** the default values, this value will be added to the `localStorage` and returned if the key is not found.

- `keyName` **[string][2]** the key-id to save the value on the `localStorage`.

***note***: the defaultValue just will be setted and returned if the keyName is not on the `localStorage`, otherwise the value found will be returned.

### Returns [getter, setter]

- getter: **[string][2]** the current value
- setter: **[Function][8]** the function to set the value. ***note***: This **[Function][8]** expects an **[Object][3]** as a parameter.

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

### `useNow`

This hook keep the current **[Date][7]** object updated. The `value` will be updated each second.

***note***: the time value is a javascript **[Date][7]** instance, you can manipulate it as any other javascript **[Date][7]** object.

### Returns [now]
- now: **[Date][7]** the current date.

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

### `useResolutionSwitch`

This hook listen to the resize window event and keep the `isResolution` flag updated.

### Parameters

- `outerWidth` **[number][5]** Size limit (px). ***defaultValue***: 1000

- `timeout` **[number][5]** Debounder timeout, the variable will change after this debounder time (ms). ***defaultValue***: 500

### Returns [size]
- size: **[boolean][4]** true when window outerSize is smaller than the outerWith passed as a parameter.

### Example

```javascript

    const myComponent = () => {
        const outerWidth = 500;
        const timeout = 1000;
        const [size] = useResolutionSwitch(outerWidth, timeout);
        
        return (<h1>{size ? 'mobile' : 'desktop'}</h1>);
    };
```

### `useEffectWithDebounce`

This hooks run an effect with a *debounce*. Each time any input change, it will be registered; when happens the *debounce* time
whitout changes, the effect will be run. (This function does not return anything).

### Parameters

- `effect` **[function][8]** The function that will be run.
- `debounce` **[number][5]** Time that have to happend to run the effect.
- `inputs` **[Array][1]&lt;[string][2] | [Object][3] | [number][5] | [boolean][4]>** an array of variables that the effect depends on.

### Example

```javascript

    const MyComponent = () => {
     const [searchText, handleChange, setSearchText] = useStateForField('');
     const debounceTime = 2000; // 2 Seconds
     const searchUsers = () => console.log(`searching: ${searchText}`);

     useEffectWithDebounce(searchUsers, debounceTime, [searchText]);

     return (
         <>
             <h1>Input: </h1>
             <input
                 value={searchText}
                 onChange={handleChange}
             />
             <p> Open the console </p>
         </>
     );
    };
```

## Hocs
 
### `enhanceWithClickOutside`

### Example

```javascript

```


## Functions
 
### `colorGenerator`

### Parameters

### Example

```javascript

```
### `debounce`
 This function allow to apply a function after certain amount of time.
### Parameters
- `F` **[function][2]** A function to be executed.
- `waitMilliseconds ` **[number][2]** The number of miliseconds to wait before execute the function.

### Example

```javascript
const myFormComponent = () => {

 const [text, setText] = React.useState("");
 
 const debounceOnClick = () =>
  debounce(()=>setText("onClick"), 200);
 
 return(
  <div>
    <h1>{text}</h1>
    <button onClick={debounceOnClick}> Reset </button> 
  <div>
 );
};
```
### `requestController`
### Parameters
 - `url`**[String][2]** Url that will be used to make the request.
 - `accessToken`**[String][2]** Access token to send as a header fo the request.
 - `requestMethod`**[String][2]** Http verb that will be use for the request.
 - `requestBody`**[Object][3]** Body fo the request.
 - `options`**[Object][3]** Object that should two properties, headersResolver & responseResolver.
  - `headersResolver`[headersResolver](#headersresolver)
  - `responseResolver` [responseResolver](#responseresolver)
 
###`headersResolver` 

### Example

```javascript


requestController


```
### `humanize`
This function takes a string and converts in to a more "readable" string.
### Parameters
-   `name` **[String][2]** A string that will be humanized.
### Returns
-`humanized` **[String][2]** The new string.

### Example

```javascript
const humanized = humanize("StringThatWillBeHumanized"); //"String That Will Be Humanized" 
```

### `toTitleCase`
This function takes a string and converts it to "Title Case", that means, it uses each word (separated by a space) and capitalizes the first letter of each word.
### Parameters
- `title` **[String][2]** A string that will be transform to title case.
### Returns
-`title` **[String][2]** The new string.

### Example

```javascript
const newTitle = toTitleCase("title test"); // "Title Test"

```
### `validations`
### Parameters

### Example

```javascript

```
### `onEnterKey`
This function is a HOF that takes a function as parameter which will be call when the "enter" key is pressed, this HOF should be used as a component's prop that will be involved in keyboard events.
### Parameters
- `callback` **[function][8]** The function that will be called when the "enter" key is pressed.
### Example

```javascript

const myComponent = () => {
 
 const onEnter = () => console.log("enter key was pressed");
 
 return(
  <div onKeyDown=(onEnterKey(onEnter))>   
  <div/>
 );
};

```

### `asyncOnEnterKey`
This function is similar to [onEnterKey](#onenterkey), the only difference is that the callback should be an async function.
### Parameters
- `callback` **[function][8]** The function that will be called when the "enter" key is pressed.
### Example
```javascript

const myComponent = () => {
 
 const onEnter = async() => await asynFunction();
 
 return(
  <div onKeyDown=(asyncOnEnterKey(onEnter))>   
  <div/>
 );
};

```


[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function
