import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    drawer: {
        flexShrink: 0,
        width: 230,
    },
    drawerPaper: {
        position: 'relative',
        width: 230,
    },
    link: {
        textDecoration: 'none',
    },
    toolbar: theme.mixins.toolbar,
}));

const MenuList = () => {
    const classes = useStyles();

    return (
        <Drawer
            variant='permanent'
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.toolbar} />
            <List>
                <Link to='/main' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                <Link to='/main' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText primary='Option one' />
                    </ListItem>
                </Link>
                <Link to='/main' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText primary='Option two' />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
};

export default MenuList;
