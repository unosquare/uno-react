import ThemeProvider from '@material-ui/styles/ThemeProvider';
import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/main/Home';
import Login from './components/main/Login';
import { ErrorBoundary } from 'uno-react';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
});
const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ErrorBoundary >
        <Switch>
          <Route exact={true} path='/' component={Login} />
          <Route exact={true} path='/main' component={Home} />
        </Switch>
      </ErrorBoundary>
    </ThemeProvider>
  </Router>
);

export default App;
