import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './components/Home';
import Help from './components/Help';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Home,
      children: [
        {
          path: '/help',
          Component: Help,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
