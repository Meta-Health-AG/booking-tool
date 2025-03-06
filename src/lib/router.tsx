import {
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import Layout from '@/Layout.tsx';
import LocationsPage from '@/pages/LocationsPage.tsx';
import EntryPage from '@/pages/EntryPage.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';

export const rootRoute = createRootRoute({
  component: Layout,
});

export const locationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations',
  component: LocationsPage,
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
  locationsRoute,
  entryRoute,
  notFoundRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultErrorComponent: () => <ErrorPage />,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
