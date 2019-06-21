import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
});

export default ({ name }: any) => {
    const classes = useStyles({});
    const path = `/uno-react/examples#${name}`;

    return (
        <HashLink to={path} className={classes.link}>
            <ListItem button={true}>
                <ListItemText secondary={name} />
            </ListItem>
        </HashLink>
    );
};
