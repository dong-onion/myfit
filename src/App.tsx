import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
