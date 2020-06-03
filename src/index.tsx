import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PizzaServiceProvider } from './components/PizzaServiceContext';
import { store } from './store';
import PizzaServiceApi from './services/PizzaServiceApi';

const pizzaService = new PizzaServiceApi();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
        <ErrorBoundary>
          <PizzaServiceProvider value={ pizzaService }>
            <Router>
              <App />
            </Router>
          </PizzaServiceProvider>
        </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
