[![npm version](https://badge.fury.io/js/uno-react.svg)](https://badge.fury.io/js/uno-react)

# uno-react
Common functions and hooks for React.

```bash
> npm i uno-react
```

## Hooks

### `useStateForModel`

Similar to `useState` but with a twist. When the input `onChange` event is called, `useStateForModel` allows you to read the `target` property in the `event` and populate a specif model's property taking the `name` and the `value`.

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

### `useEffectWithLoading`
Combine the power of create a hook `variable` and control its loading state by calling a method using `effects`, just passing the `function` name, the `default` value and the `argument` to check for re-call method (optional).

```javascript
const myInfo = {};

const myComponent = () => {
    const getMyData = () => someActionToCallMyData(myId);
    const [ data, isLoading ] = useEffectWithLoading(getMyData, default, argument);
    
    useEffect(() => {
       myInfo = data;
    }, [data]);
    
    <Card>
        <CardContent>
            {isLoading ?
            <LoadingIcon />
            :
            <Line
                data={myInfo}
            />
        </CardContent>
    </Card>
}
```

### `useStateForModelWithLoading`
Similar to `useEffectWithLoading` but allows you to create and populate data into an `object variable` with a defined `model`.

```javascript
const myComponent = () => {
    const myModel = {
        id: 1,
        name: 'My Test Name'
    };
    
    const getMyData = () => someActionToCallMyData(myId);
    const [ data, isLoadingData, handleChange ] = useStateForModelWithLoading(getMyData, myModel, argument || []);
    
    const handleSubmit(e: any) => {
        actionSubmit(data, someUrl);
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
}
```

### `useNow`
Keep the current date just in one `variable`, without calling `date` method whenever it's needed.

```javascript
const myComponent = () => {
    const date = useNow();
    
    const handleSubmit(e: any) => {
        actionSubmit(date, someUrl);
    };
    
    const handleDelete(e: any) => {
        actionDelete(date, someUrl);
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
}
```

## Classes

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)
