import React from 'react';

import { RouteObject } from 'react-router-dom';
import { HeaderLayout } from './components';
import {
  FirstResult,
  Home,
  SecondResult,
  ServiceRegistration,
  Test,
  TestStart,
} from './pages';
import {
  Persona,
  Blueprint,
  Benchmarking,
  CustomerJouneyMap,
  SystemMap,
  BusineesModelCanvas,
} from './pages/ServiceTools';

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
      { path: '/type/test', element: <Test /> },
      { path: '/type/result', element: <SecondResult /> },
      { path: '/tools/psn', element: <Persona /> },
      { path: '/tools/bmc', element: <BusineesModelCanvas /> },
      { path: '/tools/cjm', element: <CustomerJouneyMap /> },
      { path: '/tools/blp', element: <Blueprint /> },
      { path: 'tools/stm', element: <SystemMap /> },
      { path: '/tools/bcm', element: <Benchmarking /> },
    ],
  },
];
