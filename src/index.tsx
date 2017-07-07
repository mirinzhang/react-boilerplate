/**
 * Created by Min on 2017/6/27.
 */
import React from 'react';
import { render } from 'react-dom';
import { DatePicker } from 'antd';

const App = (props: any) => {
  return (
    <div>
      <p>React-TS Project</p>
      <p>module name: {props.name}</p>
      <DatePicker />
    </div>
  );
};

render(
  <App name="app" />,
  document.getElementById('app'),
);
