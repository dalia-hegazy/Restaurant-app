import React from 'react';
import Cart from './Components/Cart/Cart'; 
import Layout from './Components/Layout';
import Welcome from './Components/WelcomeScreen/Welcome';
import Menu from './Components/Menu/Menu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';

// Create the router using Layout as the root
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: '',
        element: <Welcome />
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
