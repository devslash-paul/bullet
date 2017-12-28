import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux'

ReactDOM.render(<App width={window.innerWidth} height={window.innerHeight}/>, document.getElementById('root'));