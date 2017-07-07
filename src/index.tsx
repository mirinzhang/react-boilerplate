/**
 * Created by Min on 2017/6/27.
 */
import React from 'react';
import { render } from 'react-dom';

const App = (props: any) => {
  return (
    <div>
      <p>React-TS Project</p>
      <p>module name: {props.name}</p>
    </div>
  );
};

render(
  <App name="app" />,
  document.getElementById('app'),
);
