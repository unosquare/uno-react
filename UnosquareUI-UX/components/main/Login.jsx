import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../../src/classes/TextValidator';
import { useStateForModel } from '../../../src/hooks/useStateForModel';
import accesscoreLogo from '../../assets/accesscoreLogo.png';

const useStyles = makeStyles(() => ({
        cardMedia: {
            display: 'block',
            height: '75px',
            margin: 'auto',
            maxWidth: '280px',
        },
        grid: {
            alignContent: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        submitBtn: {
            marginTop: '40px',
        },
    }));

const Login = () => {
    const classes = useStyles();
    const [isFetching, setIsFetching] = React.useState(false);
    const [model, handleChange] = useStateForModel({
        password: '',
        username: '',
      });

    function handleSubmit(e) {
        e.preventDefault();
        setIsFetching(true);
        history.push('/');
        setIsFetching(false);
    }

    return (
        <Grid container={true} className={classes.grid}>
            <Card>
                <CardMedia
                    image={accesscoreLogo}
                    className={classes.cardMedia}
                />
                <CardContent>
                    {isFetching && <LinearProgress />}
                    <ValidatorForm
                        noValidate={true}
                        autoComplete='on'
                        onSubmit={handleSubmit}
                    >
                        <TextValidator
                            id='username'
                            name='username'
                            label='Username'
                            className={''}
                            value={model.username}
                            onChange={handleChange}
                            margin='normal'
                            fullWidth={true}
                            validators={['required']}
                            errorMessages={[
                                'This field is required',
                            ]}
                        />
                        <TextValidator
                            id='password'
                            name='password'
                            label='Password'
                            className={''}
                            value={model.password}
                            onChange={handleChange}
                            margin='normal'
                            type='password'
                            fullWidth={true}
                            validators={['required']}
                            errorMessages={['This field is required']}
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            className={classes.submitBtn}
                            type='submit'
                            fullWidth={true}
                            disabled={isFetching}
                        >
                            Log in
                        </Button>
                    </ValidatorForm>
                </CardContent>
            </Card>
        </Grid>);
};

export default Login;
