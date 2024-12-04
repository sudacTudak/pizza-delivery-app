import './index.scss';

import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage.tsx';
import ErrorPage from './pages/ErrorPages/ErrorPage.tsx';
import Layout from './layout/MainLayout/MainLayout.tsx';
import ProductPage from './pages/ProductPage/ProductPage.tsx';
import axios from 'axios';
import { API_HOST } from './helpers/API.ts';
import { Product } from './interfaces/product.interface.ts';
import Loader from './components/Loader/Loader.tsx';
import AuthLayout from './layout/AuthLayout/AuthLayout.tsx';
import LoginPage from './pages/AuthPages/LoginPage.tsx';
import RegisterPage from './pages/AuthPages/RegisterPage.tsx';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import SuccessOrderPage from './pages/SuccessOrderPage/SuccessOrderPage.tsx';
import NotFoundErrorPage from './pages/ErrorPages/NotFoundErrorPage.tsx';

const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <MenuPage />
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          const data = axios.get<Product>(`${API_HOST}/products/${params.id}`);
          return defer({
            data
          });
        }
      },
      {
        path: '/success',
        element: <SuccessOrderPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundErrorPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
