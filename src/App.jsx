/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import routes from './router';

export default function () {
    return (
        <Router>
            <div>
                {routes.map(route => (
                    <Route
                        path={route.path}
                        key={route.id}
                        render={props => (
                            <route.component {...props} routes={route.routes} />
                        )}
                    />
                ))}
            </div>
        </Router>
    );
}
