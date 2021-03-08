import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import HomePage from './views/pages/first/home';

ReactDOM.render(
    <Provider store={store}>
        <HomePage></HomePage>
    </Provider>,
    document.getElementById('root')
);
