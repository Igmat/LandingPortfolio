import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routing } from './routingConfig';
import { config } from './casesConfig';
import { Provider } from './casesContext';
import './index.scss';

const router = createBrowserRouter(
  routing,
  { basename: "/LandingPortfolio/" }
  )

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider value={config}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
