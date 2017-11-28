import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import App from './pages/Home';

render(
    <div>
        <Router>
            <App />
        </Router>
        <DevTools />
    </div>,
    document.getElementById('app'),
);
