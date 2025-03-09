import {
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import Layout from '@/Layout.tsx';
import LocationsPage from '@/pages/LocationsPage.tsx';
import EntryPage from '@/pages/EntryPage.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';
import AppointmentPickerPage from '@/pages/AppointmentPickerPage.tsx';
import PersonalInformationPage from '@/pages/PersonalInformationPage.tsx';

export const rootRoute = createRootRoute({
  component: Layout,
});

export const entryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/entry',
  component: EntryPage,
  validateSearch: (search) => ({
    skus: String(search?.skus ?? ''),
  }),
});

export const locationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations',
  component: LocationsPage,
});

export const appointmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/appointments',
  component: AppointmentPickerPage,
});

export const personalInformationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/personal-information',
  component: PersonalInformationPage,
});

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: ErrorPage,
});

export const routeTree = rootRoute.addChildren([
  entryRoute,
  locationsRoute,
  appointmentsRoute,
  personalInformationRoute,
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
