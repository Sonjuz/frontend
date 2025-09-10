import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import React from 'react';

const HomePage = lazy(() => import('./pages/home/HomePage.jsx'));
const RegisterPage = lazy(() => import('./pages/register/RegisterPage.jsx'));
const ProfileRegisterPage = lazy(
  () => import('./pages/register/ProfileRegisterPage.jsx')
);
const NewsSummaryPage = lazy(() => import('./pages/News/NewsSummaryPage.jsx'));
const ScenarioDetailPage = lazy(
  () => import('./pages/scenario/ScenarioDetailPage.jsx')
);
const SimulationPage = lazy(
  () => import('./pages/scenario/simulation/SimulationPage.jsx')
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'register/profile',
        element: <ProfileRegisterPage />,
      },
      {
        path: 'simulation',
        element: <SimulationPage />,
      },
      {
        path: 'scenario/detail',
        element: <ScenarioDetailPage />,
      },
      {
        path: 'news',
        element: <NewsSummaryPage />,
      },
    ],
  },
]);
