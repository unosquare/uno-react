import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import ButtonWithLoading from './ButtonWithLoading';

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
    }));

const LoginCard = props => {
    const classes = useStyles();
    const [isFetching, setIsFetching] = React.useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsFetching(true);
        await props.submitAction();  
        setIsFetching(false);          
    }

    return (
        <Grid container={true} className={classes.grid}>
            <Card>
                <CardMedia
                    image={props.logo}
                    className={classes.cardMedia}
                />
                <CardContent>
                    <ValidatorForm
                        noValidate={true}
                        autoComplete='on'
                        onSubmit={handleSubmit}
                    > 
                    { props.children }
                    
                        <ButtonWithLoading 
                            isFetching={isFetching}
                            text='Login'
                        />
                    </ValidatorForm>
                </CardContent>
            </Card>
        </Grid>);
};

export default LoginCard;
