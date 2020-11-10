import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Order from './pages/Order';
import Product from './pages/Product';
import Blog from './components/Blog'
import News from './pages/News';
import Home from './pages/Home';
import AboutCoffee from './pages/AboutCoffee';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/store/reducers/rootReducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <News />
    </Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
