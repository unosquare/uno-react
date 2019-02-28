import * as React from 'react';
import TextValidator from '../../../src/classes/TextValidator';
import { useStateForModel } from '../../../src/hooks/useStateForModel';
import labsLogo from '../../assets/labsLogo';
import { withRouter } from 'react-router-dom';
import LoginCard from '../../../src/functions/LoginCard';

const Login = ({ history }) => {
    const [model, handleChange] = useStateForModel({
        password: '',
        username: '',
    });

    const action = () => {
        setTimeout(() => {
            history.push('/main');
        }, 3000);
    };

    return (
        <LoginCard
            logo={labsLogo}
            submitAction={action}
        >
            {
                <>
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
                </>
            }
        </LoginCard>);
};

export default withRouter(Login);
