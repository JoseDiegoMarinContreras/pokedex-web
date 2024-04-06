import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as StateProvider } from 'react-redux';
import AppRouter from './router/AppRouter';
import Storage from '@storage';
import './globalStyle.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateProvider store={Storage}>
      <RouterProvider router={AppRouter} />
    </StateProvider>
  </React.StrictMode>,
)
