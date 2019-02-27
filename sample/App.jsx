import ThemeProvider from '@material-ui/styles/ThemeProvider';
import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/main/Home';
import Login from './components/main/Login';
import { UnoTheme } from '../src/functions/UnoTheme';

const App = () => (
  <Router>
    <ThemeProvider theme={UnoTheme}>
          <Switch>
            <Route exact={true} path='/' component={Login} />
            <Route exact={true} path='/main' component={Home} />
          </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
