/**
 * Created by Min on 2017/7/11.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style';

export default class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h3>Home Page</h3>
                <h4>Example:</h4>
                <ul>
                    <li><Link to="/first">Go First pagefff========</Link></li>
                    <li><Link to="/second">Go Second page</Link></li>
                    <li><Link to="/third">Go Third page</Link></li>
                </ul>
            </div>
        );
    }
}
