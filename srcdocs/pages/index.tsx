import '../vendor';

import ThemeProvider from '@material-ui/styles/ThemeProvider';
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { UnoTheme } from 'uno-material-ui';
import Home from './Home';

const App = () => (
    <Router>
        <Switch>
            <ThemeProvider theme={UnoTheme}>
                <Home />
            </ThemeProvider>
        </Switch>
    </Router>
);

render(<App />, document.getElementById('app'));
