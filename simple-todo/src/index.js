import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import App from './container/App';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import './index.css';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();












