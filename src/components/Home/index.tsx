/**
 * Created by Min on 2017/7/11.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import './style';

export default function() {
    return (
        <div className="container">
            <p>Home page</p>
            <h4>subRoute</h4>
            <ul>
                <li><Link to="/first">First</Link></li>
                <li><Link to="/second">Second</Link></li>
                <li><Link to="/demo">Demo</Link></li>
            </ul>
        </div>
    );
}
