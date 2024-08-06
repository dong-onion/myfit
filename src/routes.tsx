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
  Benchmarking,
  Blueprint,
  BusineesModelCanvas,
  CustomerJouneyMap,
  Persona,
  SystemMap,
} from './pages/ServiceTools';
import { ROUTES_PATH } from './utility/constants';
import Main from './pages/Main';
import Swot from './pages/ServiceTools/Swot';

export const routes: RouteObject[] = [
  {
    path: ROUTES_PATH.home,
    element: <Home />,
    errorElement: <div>Not Found</div>,
  },
  {
    element: <HeaderLayout />,
    children: [
      {
        path: ROUTES_PATH.serviceRegistration,
        element: <ServiceRegistration />,
      },
      { path: ROUTES_PATH.firstResult, element: <FirstResult /> },
      { path: ROUTES_PATH.testStart, element: <TestStart /> },
      { path: ROUTES_PATH.test, element: <Test /> },
      { path: ROUTES_PATH.secondResult, element: <SecondResult /> },
      { path: ROUTES_PATH.persona, element: <Persona /> },
      {
        path: ROUTES_PATH.busineesModelCanvas,
        element: <BusineesModelCanvas />,
      },
      { path: ROUTES_PATH.customerJourneyMap, element: <CustomerJouneyMap /> },
      { path: ROUTES_PATH.bluePrint, element: <Blueprint /> },
      { path: ROUTES_PATH.systemMap, element: <SystemMap /> },
      { path: ROUTES_PATH.benchmarking, element: <Benchmarking /> },
      { path: ROUTES_PATH.main, element: <Main /> },
      { path: ROUTES_PATH.swot, element: <Swot /> },
    ],
  },
];
