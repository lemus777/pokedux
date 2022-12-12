import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { featuring, logger } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, featuring)) // enhancers para el middleware

const store = createStore(pokemonsReducer, composedEnhancers); // nuestro create store con los potenciadores de enhancers aplicados

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

