import './styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store.js';

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('nrx-app')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp);
}

renderApp();
