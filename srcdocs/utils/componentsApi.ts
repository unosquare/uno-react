const createData = (name: any, description: any, type: any) => {
    return { name, description, type };
};

const useClickOutside = [
    createData('component',
        'The component to be wrapped.', 'functionComponent'),
    createData('callback',
        'The function that will be called when the click event occurs outside the component.', 'function'),
];

const useEffectWithDebounce = [
    createData('effect',
        'The function that will be run.', 'function'),
    createData('debounce', 'Delay to run the effect.', 'number'),
    createData('inputs',
        'An array of variables that the effect is listening to', ' Array<string | Object | number | boolean>'),
];

const useEffectWithLoading = [
    createData('effect',
        'The function that will be run.', 'function'),
    createData('initialValue', 'Initial value or initial model.', 'Object'),
    createData('inputs',
        'An array of variables that the effect is listening to', ' Array<string | Object | number | boolean>'),
];

const usePersistedState = [
    createData('defaultValue',
        'This value will be added to the localStorage and returned if the key is not found.', 'string'),
    createData('keyname',
        'The key-id to save the value on the localStorage.', 'string'),
];

const useResolutionSwitch = [
    createData('outerWidth', 'Size limit (px). defaultValue: 1000', 'number'),
    createData('timeout',
        'Debounder timeout, the variable will change after this debounder time (ms). defaultValue: 500', 'number'),
];

const useStateForField = [
    createData('initialValue', 'Initial value or initial model.', 'Object'),
];

const useStateForModel = [
    createData('initialValue', 'Initial value or initial model.', 'Object'),
];

const useStateForModelWithLoading = [
    createData('effect',
        'The function that will be run.', 'function'),
    createData('initialValue ', 'Initial value or initial model.', 'Object'),
    createData('inputs',
        'An array of variables that the effect is listening to', ' Array<string | Object | number | boolean>'),
];

const useToggle = [
    createData('defaultValue ', 'Initial value.', 'boolean'),
];

const asyncOnEnterKey = [
    createData('callback',
        'The function that will be called when the "enter" key is pressed.', 'function'),
];

const colorGenerator = [
    createData('startColor',
        'Represents the start color for the interpolation.', 'Array RGB color (<Red|Green|Blue>)'),
    createData('endColor',
        'Represents the end color for the interpolation." key is pressed.', 'Array RGB color (<Red|Green|Blue>)'),
    createData('factor',
        'The ratio of the output rate to the input rate(startColor -> endColor).', 'number'),
];

const createFetchController = [
    createData('options',
        'This parameter is optional.', 'Object <headersResolver | responseResolver>'),
];

const debounce = [
    createData('F', 'A function to be executed.', 'function'),
    createData('waitMilliseconds ',
        'The number of miliseconds to wait before execute the function.', 'number'),
];

const humanize = [
    createData('name', 'A string that will be humanized.', 'string'),
];

const onEnterKey = [
    createData('callback', 'The function that will be called when the "enter" key is pressed.', 'function'),
];

const toTitleCase = [
    createData('title', 'A string that will be transform to title case.', 'string'),
];

const Apis = {
    useClickOutside, useEffectWithDebounce, useEffectWithLoading, usePersistedState,
    useResolutionSwitch, useStateForField, useStateForModel, useStateForModelWithLoading, useToggle,
    asyncOnEnterKey, colorGenerator, createFetchController, debounce, humanize, onEnterKey, toTitleCase,
};

export default Apis;
