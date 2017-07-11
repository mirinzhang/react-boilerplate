/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import routes from './router';

export default function () {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/first">First</Link></li>
                    <li><Link to="/second">Second</Link></li>
                    <li><Link to="/third">Third</Link></li>
                </ul>
                {routes.map(route => (
                    <RouteWithSubRoutes key={route.id} {...route} />
                ))}
            </div>
        </Router>
    );
}

// helpers
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )} />
);
