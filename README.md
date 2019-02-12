[![npm version](https://badge.fury.io/js/uno-react.svg)](https://badge.fury.io/js/uno-react)

# uno-react
Common functions and hooks for React.

```bash
> npm i uno-react
```

## Hooks

### `useStateForModel`

Similar to `useState` but with a twist. When the input `onChange` event is called, `useStateForModel` allows you to read the `target` property in the `event` and populate a specific model's property taking the `name` and the `value`.

```javascript
const myComponent = () => {
    const [ model, handleChange ] = useStateForModel({
        id: 1,
        name: 'Mario Di Vece'
    });

    const changeName = () => handleChange({name: 'Geo Perez'});

    return (
        <div>
            <h1>{model.id} - {model.name}</h1>
            <input 
                name="name"
                onChange={handleChange} 
                value={model.name}
            />
            <button onClick={changeName}>Set Name</button>
        </div>
    );
};
```

### `useStateForField`
The easiest way to create a new state variable using hooks, it automatically takes the `target` property and populate the `variable` with the `value` when `set method` is called.

```javascript
const myComponent = () => {
    const [ myValue, handleChange ] = useStateForField('');
    
    return (
        <div>
            <input
                value={myValue}
                onChange={handleChange}
            />
        </div>
    );
};
```

### `useEffectWithLoading`
Combine the power of create a hook `variable` and control its loading state by calling a method using `effects`, just passing the `function`, the `default` value and the `argument (optional)` for re-call method.

```javascript
const myComponent = ({ myId }) => {
    const myDefault = '';
    const myArgument = [];
    const [ myData, isLoading ] = useEffectWithLoading(getMyData(myId), myDefault, myArgument);
   
    <div>
        {isLoading ?
            <i class="fa fa-circle-o-notch fa-spin"></i>Loading
            :
            <form>
                <label>
                    {myData}
                </label>
            <form>}
    </div>
};
```

### `useStateForModelWithLoading`
Similar to `useEffectWithLoading` but allows you to create and populate data into an `object variable` with a defined `model`. The third `argument` to send for creating the hook is optional, skip it will call your function just the first time when creating the component.

```javascript
const myComponent = () => {
    const myModel = {
        name: 'my test name',
        city: 'my test city'
    };
    const [mySearchString, handleChangeSearchString] = useStateForField('');
    const [ data, isLoading, handleChange ] = useStateForModelWithLoading(getMyData(mySearchString), myModel, [mySearchString]);
    
    <div>
        <input 
            onChange={handleChangeSearchString} 
            value={mySearchString}>
        </input>
        {isLoading ?
            <i class="fa fa-circle-o-notch fa-spin"></i>Loading
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
A good way to create and update your `hooks` through using `effects` but keeping the data into a `localStorage` item.

```javascript
const myComponent = () => {
    const myDefault = '';
    const myKeyName = 'localDataKeyName';
    const [persistent, handleChange] = usePersistedState(myDefault, myKeyName);
    
    useEffect(() => {
       callMyAsyncFunction();
    }, []);
    
    const callMyAsyncFunction = async () => {
        const data = await actionToGetData();
        handleChange(data);
    };
    
    return (
        <div>
            <label>
               Hi: {persistent || ''}
            </label>
            <form>
                <input />
            </form>
        </div>
    );
};

const newComponent = () => {
    const myKeyName = 'localDataKeyName';
    const persistent = localStorage.getItem(myKeyName);
    
    return (
        <div>
            {localStorageData ?
                <label>
                    Hi: {persistent || ''}
                </label>
                <form>
                    <input />
                </form>}
        </div>
    );
};
```

### `useNow`
Keep the current date just in one `variable`, without calling `date` method whenever it's needed.

```javascript
const myComponent = () => {
    const date = useNow();
    
    const handleSubmit = () => actionSubmit(date);
    const handleDelete = () => actionDelete(date);
    
    return (
        <div>
            <button
                onClick={handleDelete}
            >
                <i class="fa fa-trash"></i> Delete
            </button>
            <form
                onSubmit={handleSubmit}
            >
                <button
                    type='submit'
                />
            </form>
        </div>
    );
};
```

## Classes

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)
