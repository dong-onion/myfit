import React from 'react';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import { HeaderLayout } from './componenets';
import SurveyStart from './pages/SurveyStart';
import ServiceRegistration from './pages/ServiceRegistration';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  {
    element: <HeaderLayout />,
    children: [
      { path: '/swot', element: <ServiceRegistration /> },
      { path: '/type', element: <SurveyStart /> },
    ],
  },
];
const router = createBrowserRouter(routes);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
