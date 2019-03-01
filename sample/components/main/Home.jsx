import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { NavBar, MenuList } from 'uno-react';
import AccountMenu from './AccountMenu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    minWidth: 0,
    overflowY: 'auto',
    padding: theme.spacing.unit * 2,
  },
  link: {
      textDecoration: 'none',
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

const menuOptions = [
  { url: '/main', name: 'Home' },
  { url: '/main', name: 'Option One' },
  { url: '/main', name: 'Option Two' },
];
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar title={'uno-react | UX/UI Toolkit'}>
        {<AccountMenu />}
      </NavBar>
      <MenuList>
        {menuOptions.map(menu => (
          <Link to={menu.url} className={classes.link} key={menu.name}>
            <ListItem button={true}>
              <ListItemText primary={menu.name} />
            </ListItem>
          </Link>
        ))
        }
      </MenuList>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>);
};

export default Home;
