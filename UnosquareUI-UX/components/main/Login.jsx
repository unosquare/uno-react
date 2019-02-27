import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../../src/classes/TextValidator';
import { useStateForModel } from '../../../src/hooks/useStateForModel';
import labsLogo from '../assets/labsLogo.png';
import { withRouter } from 'react-router-dom';
import ButtonWithLoading from '../../../src/functions/ButtonWithLoading';

const useStyles = makeStyles(() => ({
        cardMedia: {
            display: 'block',
            height: '75px',
            margin: 'auto',
            marginTop: '20px',
            maxWidth: '280px',

        },
        grid: {
            alignContent: 'center',
            justifyContent: 'center',            
            padding: 20,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        submitBtn: {
            marginTop: '40px',
        },
    }));

const Login = ({ history }) => {
    const classes = useStyles();
    const [isFetching, setIsFetching] = React.useState(false);
    const [model, handleChange] = useStateForModel({
        password: '',
        username: '',
      });

    function handleSubmit(e) {
        e.preventDefault();
        setIsFetching(true);
        setTimeout( () => {
            history.push('/main');
            setIsFetching(false);
        }, 5000);             
    }

    return (
        <Grid container={true} className={classes.grid}>
            <Card>
                <CardMedia
                    image={labsLogo}
                    className={classes.cardMedia}
                />
                <CardContent>
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
                        <ButtonWithLoading 
                            isFetching={isFetching}
                            text='Login'
                        />
                    </ValidatorForm>
                </CardContent>
            </Card>
        </Grid>);
};

export default withRouter(Login);
