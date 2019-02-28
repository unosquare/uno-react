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
    },
    drawerPaper: {
        position: 'relative',
    },
    link: {
        textDecoration: 'none',
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
                {props.menuOptions ? 
                props.menuOptions.map( menu => (
                    <Link to={menu.url} className={classes.link} key={menu.name}>
                        <ListItem button={true}>
                            <ListItemText primary={menu.name} />
                        </ListItem>
                    </Link>
                ))
                : 
                    <Link to={'/'} className={classes.link}>
                        <ListItem button={true}>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link>
                }
            </List>
        </Drawer>
    );
};

export default MenuList;
