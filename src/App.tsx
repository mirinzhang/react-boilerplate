/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './router';

export default function() {
    return (
        <Router>
            <Switch>
                {routes.map((route) => <Route {...route} />)}
            </Switch>
        </Router>
    );
}
