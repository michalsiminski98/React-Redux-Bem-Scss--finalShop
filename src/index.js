import React from 'react';
import ReactDOM from 'react-dom';
import './libraries/rainydayFunction';
import './js/navShow';
import 'swiper/swiper-bundle.css';
import './css/index.min.css';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);