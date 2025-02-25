import { createRouter, createRootRoute } from '@tanstack/react-router'
import App from '@/App'

export const rootRoute = createRootRoute({
    component: App,
})

export const routeTree = rootRoute

export const router = createRouter({ routeTree })

// Type Declaration
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}