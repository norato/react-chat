import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk))
const app = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
	</Provider>
  , app
);

registerServiceWorker();
