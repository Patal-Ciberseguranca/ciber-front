/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const Messages2LazyImport = createFileRoute('/messages2')()
const MessagesLazyImport = createFileRoute('/messages')()
const Api2LazyImport = createFileRoute('/api2')()
const ApiLazyImport = createFileRoute('/api')()
const AccountLazyImport = createFileRoute('/account')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const RegisterIndexLazyImport = createFileRoute('/register/')()
const LoginIndexLazyImport = createFileRoute('/login/')()

// Create/Update Routes

const Messages2LazyRoute = Messages2LazyImport.update({
  path: '/messages2',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/messages2.lazy').then((d) => d.Route))

const MessagesLazyRoute = MessagesLazyImport.update({
  path: '/messages',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/messages.lazy').then((d) => d.Route))

const Api2LazyRoute = Api2LazyImport.update({
  path: '/api2',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/api2.lazy').then((d) => d.Route))

const ApiLazyRoute = ApiLazyImport.update({
  path: '/api',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/api.lazy').then((d) => d.Route))

const AccountLazyRoute = AccountLazyImport.update({
  path: '/account',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/account.lazy').then((d) => d.Route))

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
    '/account': {
      preLoaderRoute: typeof AccountLazyImport
      parentRoute: typeof rootRoute
    }
    '/api': {
      preLoaderRoute: typeof ApiLazyImport
      parentRoute: typeof rootRoute
    }
    '/api2': {
      preLoaderRoute: typeof Api2LazyImport
      parentRoute: typeof rootRoute
    }
    '/messages': {
      preLoaderRoute: typeof MessagesLazyImport
      parentRoute: typeof rootRoute
    }
    '/messages2': {
      preLoaderRoute: typeof Messages2LazyImport
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
  AccountLazyRoute,
  ApiLazyRoute,
  Api2LazyRoute,
  MessagesLazyRoute,
  Messages2LazyRoute,
  LoginIndexLazyRoute,
  RegisterIndexLazyRoute,
])

/* prettier-ignore-end */
