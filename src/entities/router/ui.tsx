import { RouterProvider } from 'react-router-dom';
import { router } from './lib';

export const RouterDomProvider = () => {
  return <RouterProvider router={router} />;
};
