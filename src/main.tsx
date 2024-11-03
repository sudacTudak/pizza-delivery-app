import './index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MenuPage from './pages/MenuPage/MenuPage.tsx';
import Cart from './pages/Cart/Cart';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Layout from './layout/MainLayout/MainLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MenuPage />
      },
      {
        path: '/menu',
        element: <MenuPage />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
