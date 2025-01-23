import { Children, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import Favorites from './pages/Favorites/Favorites.jsx'
import Search from './pages/Search/Search.jsx'
import User from './pages/User/User.jsx'
import { CartProvider } from './context/Context.jsx'

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
        element: <Favorites/>
      },
      {
        path: 'search',
        element: <Search/>

      },
      
      {
        path:'user',
        element:<User/>
      },
      { path: '*', element: <div>404 - Page Not Found</div> },

    ],
  },
])

createRoot(document.getElementById('root')).render(
 
 <CartProvider>
   <Suspense   fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
    </Suspense> 
  </CartProvider>,
)
