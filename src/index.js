import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FerrariGTB from './pages/FerrariGTB';
import FerrariGTS from './pages/FerrariGTS';
import SF90Stradale from './pages/SF90Stradale';
import SF90Spider from './pages/SF90Spider';
import App from './App';
import ShopPage from './pages/ShopPage';
import { RecoilRoot } from 'recoil';
import CartPage from './pages/CartPage';
import { Toaster } from 'react-hot-toast';
import FerrariHistory from './components/PhotoCarousel/HistoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path: '/shop',
    element: (
      <App>
        <ShopPage />
      </App>
    ),
  },
  {
    path: '/cart',
    element: (
      <App>
        <CartPage />
      </App>
    ),
  },
  {
    path: '/ferrari_gtb',
    element: (
      <App>
        <FerrariGTB />
      </App>
    ),
  },
  {
    path: '/ferrari_gts',
    element: (
      <App>
        <FerrariGTS />
      </App>
    ),
  },
  {
    path: '/sf90_stradale',
    element: (
      <App>
        <SF90Stradale />
      </App>
    ),
  },
  {
    path: '/sf90_spider',
    element: (
      <App>
        <SF90Spider />
      </App>
    ),
  },
  {
    path: '/ferrari_history',
    element: (
      <App>
        <FerrariHistory />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Toaster />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
