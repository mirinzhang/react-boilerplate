import React, { Component } from 'react';
import { render } from 'react-dom';
import { DatePicker } from 'antd';

export default class App extends Component {
    render() {
        return (
            <div>
                <p>user antd design</p>
                <DatePicker />
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app'),
);
