import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { StoreContext, store } from './app/stores/store';
import { router } from './app/router/Routes';

import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}  />
    </StoreContext.Provider>
  </React.StrictMode>
);
