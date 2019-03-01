import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';


const useStyles = makeStyles(theme => ({
    drawer: {
        flexShrink: 0,
    },
    drawerPaper: {
        position: 'relative',
    },
    toolbar: theme.mixins.toolbar,
}));

const MenuList = props => {
    const classes = useStyles();

    return (
        <Drawer
            variant='permanent'
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.toolbar} />
            <List>
                {props.children}
            </List>
        </Drawer>
    );
};

export default MenuList;
