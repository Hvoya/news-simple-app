import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureAxios from './axios.config';
import CustomThemeProvider from './components/CustomThemeProvider';
import * as serviceWorker from './serviceWorker';
import store from './store';

configureAxios();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
