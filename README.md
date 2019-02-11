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
};
```

### `useEffectWithLoading`
Combine the power of create a hook `variable` and control its loading state by calling a method using `effects`, just passing the `function`, the `default` value and the `argument (optional)` to check for re-call method.

```javascript
const myComponent = ({ myId }) => {
    const myDefault = {};
    const myArgument = [];
    const [ myData, isLoading ] = useEffectWithLoading(someActionToCallMyData(myId), myDefault, myArgument);
   
    <Card>
        <CardContent>
            {isLoading ?
            <LoadingIcon />
            :
            <Line
                data={myData}
            />
        </CardContent>
    </Card>
};
```

### `useStateForModelWithLoading`
Similar to `useEffectWithLoading` but allows you to create and populate data into an `object variable` with a defined `model`.

```javascript
const myComponent = ({ myId }) => {
    const myModel = {
        id: 1,
        name: 'My Test Name'
    };
    
    const myUrl = 'example/api/actions';
    const myArgument = [];
    const [ data, isLoadingData, handleChange ] = useStateForModelWithLoading(someActionToCallMyData(myId), myModel, myArgument);
    
    const handleSubmit(e) => {
        actionSubmit(data, myUrl);
    };
    
    <div>
        {isLoadingData ?
            <LoadingIcon />
        :
        <ValidatorForm
                onSubmit={handleSubmit}
        >
            <TextValidator
               value={data.name}
                onChange={handleChange}
            />
        </ValidatorForm>}
    </div>
};
```

### `useToggleStateForField`
Keep it simple to switch `values` in your boolean `variables` using hooks. Just sending a `default` value and change it each time you call your `hook` method.

```javascript
const myComponent = () => {
    const myUrl = 'example/api/actions';
    const defaultValue = false;
    const [ myValue, handleChange ] = useToggleStateForField(defaultValue);
    
    function async handleSubmit(e) => {
        handleChange();
        await callMyActionMethod(someDataToSend, myUrl);
    };
    
    <div>
        <ValidatorForm
            onSubmit={handleSubmit}
        >
            <Button
                disabled={myValue}
            >
                Save
            </Button>
        </ValidatorForm>
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
            <Title value={`Hi - ${persistent || ''}`}/>
            <ValidatorForm>
                <TextField />
            </ValidatorForm>
        </div>
    );
};

const newComponent = () => {
    const myKeyName = 'localDataKeyName';
    const localStorageData = localStorage.getItem(myKeyName);
    
    return (
        <div>
            {localStorageData ?
                <Title value={`Hi - ${localStorageData || ''}`}/>
                <ValidatorForm>
                    <TextValidator />
                </ValidatorForm>}
        </div>
    );
};
```

### `useNow`
Keep the current date just in one `variable`, without calling `date` method whenever it's needed.

```javascript
const myComponent = () => {
    const date = useNow();
    const myUrl = 'example/api/actions';
    
    const handleSubmit(e) => {
        actionSubmit(date, myUrl);
    };
    
    const handleDelete(e) => {
        actionDelete(date, myUrl);
    };
    
    return (
        <div>
            <Button
                onClick={handleDelete}
            >
                <DeleteIcon />
            </Button>
            <ValidatorForm
                onSubmit={handleSubmit}
            >
                <TextField
                    value={myValue}
                />
            </ValidatorForm>
        </div>
    );
};
```

## Classes

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)
