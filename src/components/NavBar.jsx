import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';

const NavBar = props => (
    <AppBar position='absolute' color='primary'>
        <Toolbar>
            <Grid container={true} direction='row' xs={12}>
                <Grid item={true} xs={6}
                    container
                    direction={'row'}
                    justify={'flex-start'}
                    alignItems={'center'}
                >
                    <Typography color='textSecondary' variant='h5'>
                        {props.title || 'uno-react'}
                    </Typography>
                </Grid>
                <Grid xs={6} item={true} 
                    container={true}
                    direction={'row'}
                    justify={'flex-end'}
                    alignItems={'center'}
                >
                    {props.children}
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
);

export default NavBar;
