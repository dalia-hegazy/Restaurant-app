import React from 'react';
import Cart from './Components/Cart/Cart'; 
import Layout from './Components/Layout';
import Welcome from './Components/WelcomeScreen/Welcome';
import Menu from './Components/Menu/Menu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './Components/Home/Home';
import Login from './Components/Login/Login';


 import Register from './Components/Register/Register';
import Reserve from './Components/Reserve/Reserve';






// Create the router using Layout
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      // {
      //   path: 'home',
        // element: <Home />, //افتكري حطيناها في ال welcome
      // },
      {
        path: 'cart',
        element: <Cart />,
      },
     {
  path: 'register',
  element: <Register />,
},
     {
  path: 'Login',
  element: <Login/>,
},
     {
  path: 'reserve',
  element: <Reserve/>,
},

    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}