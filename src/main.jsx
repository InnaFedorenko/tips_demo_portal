/**
 * src/main.jsx This file is the entry point for the application.
 */

// Import required dependencies from React and other libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import components for different pages
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import DeviceActions from './pages/DeviceActionsPage.jsx';
import PaymentActions from './pages/PaymentActionsPage.jsx';


// Create a router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/device',
        element: <DeviceActions />,
      },
      {
        path: '/payment',
        element: <PaymentActions/>,
      },
    ],
  },
]);

// Render the root component using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
