import {
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import Layout from '@/Layout.tsx';
import HomePage from '@/pages/HomePage.tsx';
import EntryPage from '@/pages/EntryPage.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';

export const rootRoute = createRootRoute({
  component: Layout,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations',
  component: HomePage,
});

export const entryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/entry',
  component: EntryPage,
  validateSearch: (search) => ({
    skus: String(search?.skus ?? ''),
  }),
});

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: ErrorPage,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  entryRoute,
  notFoundRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultErrorComponent: () => <ErrorPage />,
});

// Router initialisieren
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
