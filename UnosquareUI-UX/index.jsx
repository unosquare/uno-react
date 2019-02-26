import './bootstrap';
import './vendor.js';

import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

const app = document.getElementById('app');

render(<App />, app);
