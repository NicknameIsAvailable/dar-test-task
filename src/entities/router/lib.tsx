import { HomeLayout, HomePage } from '@/pages/home';
import { RecipePage } from '@/pages/recipe';
import { RecipeLayout } from '@/pages/recipe/ui/recipe-layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/recipes/:id',
    element: <RecipeLayout />,
    children: [
      {
        path: '/recipes/:id',
        element: <RecipePage />,
      },
    ],
  },
]);
