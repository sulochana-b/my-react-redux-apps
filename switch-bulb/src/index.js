import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import allReducer from './reducers/index';
import App from './container/App';
import './assets/css/index.css';

const store = createStore(allReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();













