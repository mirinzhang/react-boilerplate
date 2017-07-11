/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Home page</p>
                <h4>subRoute</h4>
                <ul>
                    <li><Link to="/first">First</Link></li>
                    <li><Link to="/second">Second</Link></li>
                    <li><Link to="/third">Third</Link></li>
                </ul>
            </div>
        );
    }
}
