import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import {
  customerDefinitionHeader,
  entrepreneurshipHeader,
  mainBackground,
  managementHeader,
  marketFeasibilityHeader,
  objectiveInformationHeader,
  serviceRegistrationBackground,
  technologicalCompetitivenessHeader,
  testStartBackground,
} from './assets';

const router = createBrowserRouter(routes);
const App = () => {
  const preloadImages = (imagePaths: string[]) => {
    const images = [];
    for (let i = 0; i < imagePaths.length; i++) {
      images[i] = new Image();
      images[i].src = imagePaths[i];
    }
  };

  useEffect(() => {
    preloadImages([
      mainBackground,
      testStartBackground,
      serviceRegistrationBackground,
      entrepreneurshipHeader,
      marketFeasibilityHeader,
      customerDefinitionHeader,
      objectiveInformationHeader,
      technologicalCompetitivenessHeader,
      managementHeader,
    ]);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
