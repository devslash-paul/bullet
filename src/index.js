import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import entityReducer from './entity-reducer.js';

let store = createStore(combineReducers({
    entities: entityReducer
}), composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);