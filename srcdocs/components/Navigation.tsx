import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { MenuList, NavBar } from 'uno-material-ui';
import logo from '../static/uno-react-logo-white.svg';

const useStyles = makeStyles(() => ({
    button: {
        color: '#fff',
    },
    link: {
        textDecoration: 'none',
    },
    logo: {
        width: '210px',
    },
    sub: {
        marginLeft: '20px',
    },
}));

export default (props: any) => {
    const classes = useStyles(props);

    return (
        <React.Fragment>
            <NavBar title={<img className={classes.logo} src={logo} />} />
            <MenuList>
                <Link to='/uno-react/' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText secondary='Overview' />
                    </ListItem>
                </Link>
                <Link to='/uno-react/examples' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText secondary='Components' />
                    </ListItem>
                </Link>
                <HashLink to='/uno-react/examples#Hooks' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='Hooks' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-react/examples#HOCs' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='HOCs' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-react/examples#Functions' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='Functions' />
                    </ListItem>
                </HashLink>
            </MenuList>
        </React.Fragment>
    );
};
