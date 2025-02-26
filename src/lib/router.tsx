import {createRouter, createRootRoute, createRoute} from '@tanstack/react-router'
import Layout from '@/Layout.tsx'
import HomePage from "@/pages/HomePage.tsx";
import EntryPage from "@/pages/EntryPage.tsx";

export const rootRoute = createRootRoute({
    component: Layout,
})

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage
})

export const entryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/entry',
    component: EntryPage,
    validateSearch: (search) => ({
        skus: String(search?.skus ?? '')
    })
})

export const routeTree = rootRoute.addChildren([
    homeRoute,
    entryRoute
])

export const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPendingComponent: () => <div>Loading...</div>,
    defaultErrorComponent: ({ error }) => <div>{error.message}</div>
})

// Router initialisieren
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}