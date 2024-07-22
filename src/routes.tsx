import React from 'react';

import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import { HeaderLayout } from './componenets';
import ServiceRegistration from './pages/ServiceRegistration';
import SurveyStart from './pages/SurveyStart';
import FirstResult from './pages/FirstResult';

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
      { path: '/type', element: <SurveyStart /> },
    ],
  },
];
