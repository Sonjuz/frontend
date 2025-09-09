import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import React from 'react';

const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'));
const ProfilePage = lazy(() => import('./pages/Profile/ProfilePage.jsx'));
const VoicePhishingPage = lazy(
  () => import('./pages/Scenario/VoicePhishingPage.jsx')
);
const SmishingPage = lazy(() => import('./pages/Scenario/SmishingPage.jsx'));
const NewsSummaryPage = lazy(() => import('./pages/News/NewsSummaryPage.jsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'scenario/voice',
        element: <VoicePhishingPage />,
      },
      {
        path: 'scenario/smishing',
        element: <SmishingPage />,
      },
      {
        path: 'news',
        element: <NewsSummaryPage />,
      },
    ],
  },
]);
