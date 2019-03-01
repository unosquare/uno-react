import * as React from 'react';
import { TextValidator, useStateForModel, CentralCard, ButtonWithLoading } from 'uno-react';
import labsLogo from '../../assets/labsLogo.png';
import { withRouter } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { ValidatorForm } from 'react-form-validator-core';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    cardMedia: {
        display: 'block',
        height: '75px',
        margin: 'auto',
        marginTop: '20px',
        maxWidth: '280px',

    },
}));

const Login = ({ history }) => {
    const [isFetching, setIsFetching] = React.useState(false);
    const classes = useStyles();

    const [model, handleChange] = useStateForModel({
        password: '',
        username: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        setIsFetching(true);
        setTimeout(() => {
            history.push('/main');
            setIsFetching(false);
        }, 3000);
    }

    return (
        <CentralCard>
            {
                <>
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
                </>
            }
        </CentralCard>);
};

export default withRouter(Login);
