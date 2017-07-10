/**
 * Created by Min on 2017/6/27.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import Demo from './containers/Demo';

const store = createStore<StoreState>(enthusiasm, ({
    enthusiasmLevel: 1,
    languageName: 'Demo Project',
}));

render(
    <Provider store={store}>
        <Demo />
    </Provider>,
    document.getElementById('app'),
);
