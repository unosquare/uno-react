const useClickOutside = `
const myComponent = () => {

    const [color, setColor] = React.useState('green');
    const onClick = () => setColor('green');

    const toBeEnhanced = () => (
        <div
            style={{ backgroundColor: color }}
            onClick={onClick}
        />
    );

    const functionToApply = () => setColor('red');
    const Enhanced = useClickOutside(toBeEnhanced, functionToApply);

    return (
        <div
            style={{
                height: '80px',
                width: '80px',
            }}
        >
            <Enhanced />
        </div>
    );
};`;

const useEffectWithDebounce = `
const MyComponent = () => {
    const [searchText, handleChange, setSearchText] = useStateForField('');
    const debounceTime = 2000; // 2 Seconds
    const searchUsers = () => console.log(searchText);

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
};`;

const useEffectWithLoading = `
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
};`;

const useNow = `
const myComponent = () => {
    const [now] = useNow();
    
    return (
        <div>
            Seconds: {now.getSeconds()}
        </div>
    );
};`;

const usePersistedState = `
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
};`;

const useResolutionSwitch = `
const myComponent = () => {
    const outerWidth = 500;
    const timeout = 1000;
    const [size] = useResolutionSwitch(outerWidth, timeout);
    
    return (<h1>{size ? 'mobile' : 'desktop'}</h1>);
};`;

const useStateForField = `
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
};`;

const useStateForModel = `
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
};`;

const useStateForModelWithLoading = `
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
};`;

const useToggle = `
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
};`;

const enhanceWithClickOutside = `
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

 retur`;

const asyncOnEnterKey = `
const myComponent = () => {
 
    const onEnter = async() => await asynFunction();
    
    return(
     <div onKeyDown=(asyncOnEnterKey(onEnter))>   
     <div/>
    );
   };
   
   
   const SearchBox: React.FunctionComponent<any> = ({retrieveInput}) => {
       const [search, changeSearch] = useStateForField('');
      
       const action = async() => await retrieveInput(search);
       
       return (
           <TextField
               onKeyDown={asyncOnEnterKey(action)}
               value={search}
               onChange={changeSearch}
           />
       );
   };`;

const colorGenerator = `
const myComponent = () => {
    const startColor = [255, 0, 0];
    const endColor = [0, 255, 0];

    const colors = ColorGenerator(startColor, endColor, 1); //Array of colors result of the interpolation.

    //Here we use the array of colors to create new divs using the color data to set the backgroundColor value.
    //Every color represents a RGB array (color[0] = red channel value, color[1] = green channel value,
    //color[2] = blue channel value)
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
                            backgroundColor: rgb(color[0], color[1], color[2]),
                            height: '10px',
                            width: '10px',
                        }}
                    />
                ))
            }
        </div>
    );
};`;

const createFetchController = `
const requestController = createFetchController({});
const response = await requestController('http://testUrl', null, 'Get', null);`;

const debounce = `
const SearchBox: React.FunctionComponent<any> = ({retrieveInput}) => {
    const [search, changeSearch] = useStateForField('');
  
    const action = () => retrieveInput(search);
    const onChange = (ev) => debounce(()=> changeSearch(ev.target.value), 500);
 
    return (
        <TextField
            onKeyDown={onEnterKey(action)}
            value={search}
            onChange={onChange}
        />
    );
};`;

const humanize = `
const humanized = humanize("StringThatWillBeHumanized");`;

const onEnterKey = `
const SearchBox: React.FunctionComponent<any> = ({retrieveInput}) => {
    const [search, changeSearch] = useStateForField('');

    const action = () => retrieveInput(search);

    return (
        <TextField
            onKeyDown={onEnterKey(action)}
            value={search}
            onChange={changeSearch}
        />
    );
};`;

const toTitleCase = `
const newTitle = toTitleCase("title test");`;

const ValidatorForm = `
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
                    'Should have at least 1 upper case, 1 lower case, 1 special character
                    and a min length of 8 characters',
                ]}
            />
            <TextValidator
                id='isPasswordMatch'
                value={fields.isPasswordMatch}
                onChange={handleChange}
                validators={['required', 'isPasswordMatch:fields.Password']}
                errorMessages={[
                    'This field is required',
                    'Must be the same as the password field',
                ]}
            />
        </ValidatorForm>
    );
};`;

const Codes = {
    useClickOutside, useEffectWithDebounce, useEffectWithLoading, usePersistedState,
    useResolutionSwitch, useStateForField, useStateForModel, useStateForModelWithLoading, useToggle,
    asyncOnEnterKey, colorGenerator, createFetchController, debounce, humanize, onEnterKey, toTitleCase,
    useNow, ValidatorForm, enhanceWithClickOutside,
};

export default Codes;
