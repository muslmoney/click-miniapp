import React, { Suspense, lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.jsx'
import { CProvider } from './context/Context.jsx';
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Cart = lazy(() => import("./pages/Cart/Cart.jsx"));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'));
const Search = lazy(() => import('./pages/Search/Search.jsx'));
const User = lazy(() => import('./pages/User/User.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'user',
        element: <User />
      },
      { path: '*', element: <div>404 - Page Not Found</div> },
    ],
  },
]);

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ContextProvider>
  </StrictMode>
);



