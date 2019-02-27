import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';

const NavBar = props => (
    <AppBar position='absolute' color='primary'>
        <Toolbar>
            <Grid container={true} direction='row'>
                <Grid item={true}>
                    <Typography color='textSecondary' variant='h5'>
                        {props.title || 'uno-react'}
                </Typography>
                </Grid>
                <Grid item={true}>
                    {props.children}
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
);

export default NavBar;
