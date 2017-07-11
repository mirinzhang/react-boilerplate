/**
 * Created by Min on 2017/6/27.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';

import App from './App';

const store = createStore<StoreState>(enthusiasm, ({
    enthusiasmLevel: 1,
    languageName: 'typescript',
}));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
