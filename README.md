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
      * [useEffectWithDebounce](#useeffectwithdebounce)
      * [useEffectWithLoading](#useeffectwithloading)
      * [useNow](#usenow)
      * [usePersistedState](#usepersistedstate)
      * [useResolutionSwitch](#useresolutionswitch)
      * [useStateForField](#usestateforfield)
      * [useStateForModel](#usestateformodel)
      * [useStateForModelWithLoading](#usestateformodelwithloading)
      * [useToggle](#usetoggle)
    * [Hocs](#hocs)
      * [enhanceWithClickOutside](#enhancewithclickoutside)
    * [Functions](#functions)
      * [asyncOnEnterKey](#asynconenterkey)
      * [colorGenerator](#colorgenerator)   
      * [createFetchController](#createfetchcontroller)
      * [debounce](#debounce)
      * [humanize](#humanize)
      * [onEnterKey](#onenterkey)
      * [toTitleCase](#totitlecase)
      * [ValidatorForm](#validatorform)
      
## Installation

```bash
> npm i uno-react
```

We are using hooks, so you need to work with React ^16.8.0.

## What's in the library

In this section, we present the different components that are available in the uno-react library. Please keep in mind that everything in the library is opt-in. uno-react is completely opt-in. It won't force you to use any of its components, classes or methods.

## Hooks

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

## Hocs
 
### `enhanceWithClickOutside`
This **[HOC][11]** allows to the wrapped component to call a function when a click event occurs outside the component. The function that will be call must be named handleClickOutside and should receive an event as parameter.

### Example

```javascript

class ToBeEnhanced extends React.Component<any> {

    constructor(props) {
        super(props);
    }

    public render() {

        return (
            <div
                style={{
                    backgroundColor: 'red',
                    height: '100px',
                    width: '100px',
                }}
            />
        );
    }

    private handleClickOutside = (e) => {
        //Do what you want in here.
    }
}

const Enhanced = enhanceWithClickOutside(ToBeEnhanced);

const Test = () => {

 return (
  <Enhanced />
 );
};

```


## Functions
 
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


const SearchBox: React.FunctionComponent<any> = ({retrieveInput}) => {
    const [search, changeSearch] = useStateForField('');
    const classes = getClasses();

    const action = async() => await retrieveInput(search);
    
    return (
        <TextField
            className={classes.searchBox}
            onKeyDown={asyncOnEnterKey(action)}
            value={search}
            onChange={changeSearch}
        />
    );
};

```
 
### `colorGenerator`
This function retrieves an **[Array][1]** of RGB colors that are a result of an interpolation between to given RGB colors.

### Parameters
- `startColor` **[Array][1]** RGB color (<Red|Green|Value>) that represents the start color for the interpolation.
- `endColor` **[Array][1]** RGB color (<Red|Green|Value>) that represents the end color for the interpolation.
- `factor` **[Number][5]** The ratio of the output rate to the input rate(startColor -> endColor).

### Returns
- `Colors` **[Array][1]** RGB colors array.

### Example

```javascript

const myComponent = () => {
    const startColor = [255, 0, 0];
    const endColor = [0, 255, 0];

    const colors = ColorGenerator(startColor, endColor, 1); //Array of colors result of the interpolation.

    //Here we use the array of colors to create new divs using the color data to set the backgroundColor value.
    //Every color represents a RGB array (color[0] = red channel value, color[1] = green channel value, color[2] = blue channel value)
    return (
        <div
            style={{
                height: 'auto',
                width: '100px',
            }}
        >
            {
                colors.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                            height: '10px',
                            width: '10px',
                        }}
                    />
                ))
            }
        </div>
    );
};

```

### `createFetchController`
This function works as a "quick start" for [requestController](#requestcontroller), this function allows you to use a default headersResolver and a default responseSolver.
### Parameters 
- `options`**[Object][3]** <[headersResolver](#headersresolver) | [responseResolver](#responseresolver)>.
***note***: this parameter is optional.

### Returns
- [requestControllerWithDefaultResolvers](#requestcontrollerwithdefaultresolvers)**[Function][8]**


### Example

```javascript

const requestController = createFetchController({});
const response = await requestController('http://testUrl', null, 'Get', null);

```

### `debounce`
 This function allow to apply a function after certain amount of time.
### Parameters
- `F` **[function][2]** A function to be executed.
- `waitMilliseconds ` **[number][2]** The number of miliseconds to wait before execute the function.

### Example

```javascript
const SearchBox: React.FunctionComponent<any> = ({retrieveInput}) => {
    const [search, changeSearch] = useStateForField('');
    const classes = getClasses();

    const action = () => retrieveInput(search);
    const onChange = (ev) => debounce(()=> changeSearch(ev.target.value), 500);
 
    return (
        <TextField
            className={classes.searchBox}
            onKeyDown={onEnterKey(action)}
            value={search}
            onChange={onChange}
        />
    );
};
```

### `humanize`
This function takes a string and converts in to a more "readable" string.
### Parameters
- `name` **[String][2]** A string that will be humanized.
### Returns
- `humanized` **[String][2]** The new string.

### Example

```javascript
const humanized = humanize("StringThatWillBeHumanized"); //"String That Will Be Humanized" 
```

### `onEnterKey`
This function is a HOF that takes a function as parameter which will be call when the "enter" key is pressed, this HOF should be used as a component's prop that will be involved in keyboard events.
### Parameters
- `callback` **[function][8]** The function that will be called when the "enter" key is pressed.
### Example

```javascript

const SearchBox: React.FunctionComponent<any> = ({retrieveInput}) => {
    const [search, changeSearch] = useStateForField('');
    const classes = getClasses();

    const action = () => retrieveInput(search);

    return (
        <TextField
            className={classes.searchBox}
            onKeyDown={onEnterKey(action)}
            value={search}
            onChange={changeSearch}
        />
    );
};

```

### `toTitleCase`
This function takes a string and converts it to "Title Case", that means, it uses each word (separated by a space) and capitalizes the first letter of each word.
### Parameters
- `title` **[String][2]** A string that will be transform to title case.
### Returns
- `title` **[String][2]** The new string.

### Example

```javascript
const newTitle = toTitleCase("title test"); // "Title Test"

```
### `ValidatorForm`
This component extends the original **[ValidatorForm][12]** rules. This component works for wrap TextValidator component(s) and for register any other custom rules, this rules can be used in the wrapped components.

Rules:
 - isNotAllBlanks: Validates that the input is not empty, white spaces are ignored.
 - maxNaturalNumber: Validates that the input number si not greather than the given.
 - validateEndDate: Validates than endDate is later than startDate.
 - startDateGreaterThanEndDate: Validates that a date is bigger than other.
 - isImage: Verify that the input correspond to a image name with image file extension.
 - atLeastOneLowerAndUpperCase: Verify that the input has at least one letter in lower case and one in upper case. 
 - atLeastOneNumber: Verify that the input has at least one number.
 - atLeastOneSpecialCharacter: Verify that the input has at least one special character (e.g. * # $ &).
  - pincodeValidator: Verify the input contains only numeric values and has a length of 6 characters.
 - password: Validated that the input has at least a length of 8 characteres and contains especial characters, lower case & upper           case characters.
 - isPasswordMatch: Verify that the input is equal to another value.(e.g. when validated password & password verfication fields).


### Example

```javascript

const form = () => {
    const [fields, handleChange] = useStateForModel({
        atLeastOneLowerAndUpperCase: '',
        atLeastOneNumber: '',
        atLeastOneSpecialCharacter: '',
        isImage: '',
        isNotAllBlanks: '',
        isPasswordMatch: '',
        maxNaturalNumber: '',
        password: '',
        pincodeValidator: '',
        startDateGreaterThanEndDate: '',
        validateEndDate: '',
    });

    return (
        <ValidatorForm
            autoComplete='off'
            instantValidate={true}
        >
            <TextValidator
                id='isNotAllBlanks'
                value={fields.isNotAllBlanks}
                onChange={handleChange}
                validators={['required', 'isNotAllBlanks:5']}
                errorMessages={[
                    'This field is required',
                    'The minimum length is 5 characters, blank spaces are ignored',
                ]}
            />
            <TextValidator
                id='maxNaturalNumber'
                value={fields.maxNaturalNumber}
                onChange={handleChange}
                validators={['required', 'maxNaturalNumber:100']}
                errorMessages={[
                    'This field is required',
                    'The input should not be greater than 100',
                ]}
            />
            <TextValidator
                id='validateEndDate'
                value={fields.validateEndDate}
                onChange={handleChange}
                validators={['required', 'validateEndDate: 2019:07:29']}
                errorMessages={[
                    'This field is required',
                    'The date should be earlier than 2019:07:29',
                ]}
            />
            <TextValidator
                id='startDateGreaterThanEndDate'
                value={fields.startDateGreaterThanEndDate}
                onChange={handleChange}
                validators={['required', 'startDateGreaterThanEndDate: 2019:07:29']}
                errorMessages={[
                    'This field is required',
                    'The start date should be greater than 2019:07:29',
                ]}
            />
            <TextValidator
                id='isImage'
                value={fields.isImage}
                onChange={handleChange}
                validators={['required', 'isImage: .jpg']}
                errorMessages={[
                    'This field is required',
                    'The file extension should be .jpg',
                ]}
            />
            <TextValidator
                id='atLeastOneLowerAndUpperCase'
                value={fields.atLeastOneLowerAndUpperCase}
                onChange={handleChange}
                validators={['required', 'atLeastOneLowerAndUpperCase']}
                errorMessages={[
                    'This field is required',
                    'Should have at least one upper case and one lower case character',
                ]}
            />
            <TextValidator
                id='atLeastOneNumber'
                value={fields.atLeastOneNumber}
                onChange={handleChange}
                validators={['required', 'atLeastOneNumber']}
                errorMessages={[
                    'This field is required',
                    'Should contain at least one number',
                ]}
            />
            <TextValidator
                id='atLeastOneSpecialCharacter'
                value={fields.atLeastOneSpecialCharacter}
                onChange={handleChange}
                validators={['required', 'atLeastOneSpecialCharacter']}
                errorMessages={[
                    'This field is required',
                    'Should contain at least one special character',
                ]}
            />
            <TextValidator
                id='pincodeValidator'
                value={fields.pincodeValidator}
                onChange={handleChange}
                validators={['required', 'pincodeValidator']}
                errorMessages={[
                    'This field is required',
                    'should not contain white spaces and a length of 6 characters',
                ]}
            />
            <TextValidator
                id='password'
                value={fields.password}
                onChange={handleChange}
                validators={['required', 'password']}
                errorMessages={[
                    'This field is required',
                    'Should have at least 1 upper case, 1 lower case, 1 special character and a min length of 8 characters',
                ]}
            />
            <TextValidator
                id='isPasswordMatch'
                value={fields.isPasswordMatch}
                onChange={handleChange}
                validators={['required', `isPasswordMatch:${fields.Password}`]}
                errorMessages={[
                    'This field is required',
                    'Must be the same as the password field',
                ]}
            />
        </ValidatorForm>
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

[9]: https://developer.mozilla.org/docs/Web/API/Headers

[10]: https://developer.mozilla.org/docs/Web/API/Response

[11]: https://reactjs.org/docs/higher-order-components.html

[12]: https://www.npmjs.com/package/react-form-validator-core
