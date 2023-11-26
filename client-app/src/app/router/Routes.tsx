import { RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';

import App from '../layout/App';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'activities', element: <ActivityDashboard /> },
      { path: 'activities/:id', element: <ActivityDetails /> },
      { path: 'createActivity', element: <ActivityForm key="create" /> },
      { path: 'editActivity/:id', element: <ActivityForm key="edit" /> },
      { path: 'errors', element: <TestErrors /> },
      { path: 'notFound', element: <NotFound /> },
      { path: 'serverError', element: <ServerError /> },
      { path: '*', element: <Navigate replace to="/notFound" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
