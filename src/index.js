import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
/***************
 * redux thunk
 * Donde aplicado Redux, debemos impòrtar también thunk
 */
import thunk from 'redux-thunk'

/**************
 * antes teniamos 
 * const store=createStore(reducer)
 * 
 * ahora debemos aplicarle el midleware de thunk
 */
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


