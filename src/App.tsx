/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './router';

export default class App extends Component <any, any> {
    public render() {
        return (
            <Router>
                <Switch>
                    {routes.map((route, key) => <Route key={key} {...route} />)}
                </Switch>
            </Router>
        );
    }
}
