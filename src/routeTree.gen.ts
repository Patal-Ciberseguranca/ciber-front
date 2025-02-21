/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegistosLazyImport = createFileRoute('/registos')()
const CriarregistoLazyImport = createFileRoute('/criarregisto')()
const ApiLazyImport = createFileRoute('/api')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const RegisterIndexLazyImport = createFileRoute('/register/')()
const LoginIndexLazyImport = createFileRoute('/login/')()

// Create/Update Routes

const RegistosLazyRoute = RegistosLazyImport.update({
  path: '/registos',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/registos.lazy').then((d) => d.Route))

const CriarregistoLazyRoute = CriarregistoLazyImport.update({
  path: '/criarregisto',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/criarregisto.lazy').then((d) => d.Route))

const ApiLazyRoute = ApiLazyImport.update({
  path: '/api',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/api.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const RegisterIndexLazyRoute = RegisterIndexLazyImport.update({
  path: '/register/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/register.index.lazy').then((d) => d.Route),
)

const LoginIndexLazyRoute = LoginIndexLazyImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/api': {
      preLoaderRoute: typeof ApiLazyImport
      parentRoute: typeof rootRoute
    }
    '/criarregisto': {
      preLoaderRoute: typeof CriarregistoLazyImport
      parentRoute: typeof rootRoute
    }
    '/registos': {
      preLoaderRoute: typeof RegistosLazyImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      preLoaderRoute: typeof LoginIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/register/': {
      preLoaderRoute: typeof RegisterIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  ApiLazyRoute,
  CriarregistoLazyRoute,
  RegistosLazyRoute,
  LoginIndexLazyRoute,
  RegisterIndexLazyRoute,
])

/* prettier-ignore-end */
