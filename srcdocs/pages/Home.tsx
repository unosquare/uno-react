import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Examples from './Examples';
import Overview from './Overview';

const useStyles = makeStyles((theme: any) => ({
    content: {
        flexGrow: 1,
        minWidth: 0,
        overflowY: 'auto',
        padding: theme.spacing(2),
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    },
    toolbar: theme.mixins.toolbar,
}));

export default () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <Navigation />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route path='/uno-react/' exact={true} component={Overview} />
                <Route path='/uno-react/examples' exact={true} component={Examples} />
            </main>
        </div>
    );
};
