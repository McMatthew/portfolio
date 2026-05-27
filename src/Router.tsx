import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ProjectsPage } from './pages/Projects.page';
import { SkillsPage } from './pages/Skills.page';
import { ContactPage } from './pages/Contact.page';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/projects',
      element: <ProjectsPage />,
    },
    {
      path: '/skills',
      element: <SkillsPage />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
  ],
  { basename: '/portfolio' }
);

export function Router() {
  return <RouterProvider router={router} />;
}
