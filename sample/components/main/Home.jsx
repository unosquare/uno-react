import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import NavBar from '../../../src/components/NavBar';
import MenuList from '../../../src/components/MenuList';
import AccountMenu from './AccountMenu';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    minWidth: 0,
    overflowY: 'auto',
    padding: theme.spacing.unit * 2,
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

const catalog = [
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
      <MenuList
        menuOptions={catalog} 
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>);
};

export default Home;
