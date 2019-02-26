import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login } from './components';
import { UnoTheme } from '../src/functions/UnoTheme';

const App = () => (
  <Router>
    <ThemeProvider theme={UnoTheme}>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} />
          </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
