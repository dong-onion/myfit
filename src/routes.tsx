import React from 'react';

import { RouteObject } from 'react-router-dom';
import { HeaderLayout } from './componenets';
import { FirstResult, Home, ServiceRegistration, TestStart } from './pages';

export const routes: RouteObject[] = [
  { path: '', element: <Home />, errorElement: <div>Not Found</div> },
  { path: '/', element: <Home /> },
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/swot',
        element: <ServiceRegistration />,
      },
      { path: '/swot/result', element: <FirstResult /> },
      { path: '/type', element: <TestStart /> },
    ],
  },
];
