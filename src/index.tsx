import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routing } from './routingConfig';
import { config } from './casesConfig';
import { Provider } from './casesContext';
import './index.scss';

const baseURL = document.querySelector('base')?.getAttribute("href") || "/";

const link = new URL(baseURL, "https://igmat.github.io" );
console.log(link.pathname);

const router = createBrowserRouter(
  routing , { basename: link.pathname } 
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
