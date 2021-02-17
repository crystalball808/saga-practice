import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSaga from 'redux-saga'
import {rootReducer} from './redux/rootReducer'
import {sagaWatcher} from './redux/sagas'

const saga = createSaga();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(sagaWatcher) 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

