import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';


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

const CentralCard = props => {
    const classes = useStyles();

    return (
        <Grid container={true} className={classes.grid}>
            <Card>
               {props.children} 
            </Card>
        </Grid>);
};

export default CentralCard;
