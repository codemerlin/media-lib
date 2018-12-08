import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

//intialize Store
const store = configureStore();

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />,
  </Provider>,
  document.getElementById('root'),
);
