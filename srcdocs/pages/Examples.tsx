import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import Component from '../components/Component';
import SectionLink from '../components/SectionLink';
import Apis from '../utils/componentsApi';
import Codes from '../utils/componentsCode';

const useStyles = makeStyles({
    container: {
        margin: '0',
        padding: 30,
        width: '100%',
    },
    content: {
        marginTop: 10,
    },
    examples : {
        marginRight: '80px',
    },
    link: {
        textDecoration: 'none',
    },
    logo: {
        width: '300px',
    },
    paper: {
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
    },
    section: {
        paddingTop: '75px',
    },
    toc: {
        paddingBottom: 30,
        paddingTop: 30,
        width: '100%',
    },
    tocTitle: {
        paddingLeft: 20,
    },
});

export default () => {
    const classes = useStyles({});

    return (
        <Grid container={true} className={classes.container}>
            <Grid item={true} xs={9} className={classes.examples}>
            <Paper className={classes.paper}>
            <Typography className={classes.section} variant='h3' id='Hooks'>Hooks</Typography>
            <Component
                    title='useClickOutside'
                    text='This hook allows to call a given function when a click event occurs outside the component.'
                    api={Apis.useClickOutside}
                    code={Codes.useClickOutside}
            />
            <Component
                    title='useEffectWithDebounce'
                    text='This hooks run an effect with a debounce. Each time any input change, it
                        will be registered; when happens the debounce time whitout changes, the effect will be run.
                        (This function does not return anything).'
                    api={Apis.useEffectWithDebounce}
                    code={Codes.useEffectWithDebounce}
            />
            <Component
                    title='useEffectWithLoading'
                    text='This hook handles the process of getting a external resource like a fetch or reading a file,
                        and prevent updating the react state if the component is unmounted before the resource 
                        is loaded.'
                    api={Apis.useEffectWithLoading}
                    code={Codes.useEffectWithLoading}
            />
            <Component
                    title='useNow'
                    text='This hook keep the current Date object updated. The value will be updated each second.
                        note: the time value is a javascript Date instance, you can manipulate it as any other
                        javascript Date object.'
                    code={Codes.useNow}
            />
            <Component
                    title='usePersistedState'
                    text='This hook allows us to set and get values from the localStorage.'
                    api={Apis.usePersistedState}
                    code={Codes.usePersistedState}
            />
            <Component
                    title='useResolutionSwitch'
                    text='This hook listen to the resize window event and keep the isResolution flag updated.'
                    api={Apis.useResolutionSwitch}
                    code={Codes.useResolutionSwitch}
            />
            <Component
                    title='useStateForField'
                    text='Similar to useStateForModel this hook helps us to keep the value of a variable that is
                        related to an input, but in this case useStateForField works just with one value.'
                    api={Apis.useStateForField}
                    code={Codes.useStateForField}
            />
            <Component
                    title='useStateForModel'
                    text='This hook allows us to keep updated the values of a model that are related to an input,
                    handling the input onChange calls. During the first render the model will have the initialValue.'
                    api={Apis.useStateForModel}
                    code={Codes.useStateForModel}
            />
            <Component
                    title='useStateForModelWithLoading'
                    text='This hook allows us to keep updated the values of a model that are related to an input,
                        handling the inputs onChange calls like useStateForModel does, but in additino this hook
                        allows us to load the data from an external resource.
                        This hook is a mix between useStateForModel and useEffectWithLoading, you can use it just as
                        useStateForModel and handle the loading with the extra variable returned isLoading.'
                    api={Apis.useStateForModelWithLoading}
                    code={Codes.useStateForModelWithLoading}
            />
            <Component
                    title='useToggle'
                    text='This hook handles the switch on boolean values. The value will be toggled each time the
                        function toggle is called.'
                    api={Apis.useToggle}
                    code={Codes.useToggle}
            />
            <Typography className={classes.section} variant='h3' id='HOCs'>HOCs</Typography>
            <Component
                    title='enhanceWithClickOutside'
                    text='This HOC allows to the wrapped component to call a function when a click event occurs outside
                        the component. The function that will be call must be named handleClickOutside and should
                        receive an event as parameter.'
                    code={Codes.enhanceWithClickOutside}
            />
            <Typography className={classes.section} variant='h3' id='Functions'>Functions</Typography>
            <Component
                    title='asyncOnEnterKey'
                    text='This function is similar to onEnterKey, the only difference is that the callback should
                        be an async function.'
                    api={Apis.asyncOnEnterKey}
                    code={Codes.asyncOnEnterKey}
            />
            <Component
                    title='colorGenerator'
                    text='This function retrieves an Array of RGB colors that are a result of an interpolation
                        between to given RGB colors.'
                    api={Apis.colorGenerator}
                    code={Codes.colorGenerator}
            />
            <Component
                    title='createFetchController'
                    text='This function works as a "quick start" for requestController, this function allows
                        you to use a default headersResolver and a default responseSolver.'
                    api={Apis.createFetchController}
                    code={Codes.createFetchController}
            />
            <Component
                    title='debounce'
                    text='This function allow to apply a function after certain amount of time.'
                    api={Apis.debounce}
                    code={Codes.debounce}
            />
            <Component
                    title='humanize'
                    text='This function takes a string and converts in to a more "readable" string.'
                    api={Apis.humanize}
                    code={Codes.humanize}
            />
            <Component
                    title='onEnterKey'
                    text='This function is a HOF that takes a function as parameter which will be
                        call when the "enter" key is pressed, this HOF should be used as a components
                        prop that will be involved in keyboard events.'
                    api={Apis.onEnterKey}
                    code={Codes.onEnterKey}
            />
            <Component
                    title='toTitleCase'
                    text='This function takes a string and converts it to "Title Case", that means, it
                        uses each word (separated by a space) and capitalizes the first letter of each word.'
                    api={Apis.toTitleCase}
                    code={Codes.toTitleCase}
            />
            <Component
                    title='ValidatorForm'
                    text='This component extends the original ValidatorForm rules. This component works for
                        wrap TextValidator component(s) and for register any other custom rules, this rules
                        can be used in the wrapped components.'
                    code={Codes.ValidatorForm}
            />
            </Paper>
            </Grid>
            <Grid item={true} xs={2}>
                <Paper className={classes.toc}>
                    <Typography variant='h6' className={classes.tocTitle}>Content</Typography>
                    <hr />
                    <SectionLink name='useClickOutside'/>
                    <SectionLink name='useEffectWithDebounce'/>
                    <SectionLink name='useEffectWithLoading'/>
                    <SectionLink name='useNow'/>
                    <SectionLink name='usePersistedState'/>
                    <SectionLink name='useResolutionSwitch'/>
                    <SectionLink name='useStateForField'/>
                    <SectionLink name='useStateForModel'/>
                    <SectionLink name='useStateForModelWithLoading'/>
                    <SectionLink name='useToggle'/>
                    <SectionLink name='enhanceWithClickOutside'/>
                    <SectionLink name='asyncOnEnterKey'/>
                    <SectionLink name='colorGenerator'/>
                    <SectionLink name='createFetchController'/>
                    <SectionLink name='debounce'/>
                    <SectionLink name='humanize'/>
                    <SectionLink name='onEnterKey'/>
                    <SectionLink name='toTitleCase'/>
                    <SectionLink name='ValidatorForm'/>
                </Paper>
            </Grid>
        </Grid>
    );
};
