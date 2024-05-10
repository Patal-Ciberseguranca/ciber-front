import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useRouteContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthContext } from '@/components/AuthProvider';

import '@/app.css';

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthContext;
}

const Root = (): React.ReactNode => {
  const context = Route.useRouteContext();
  return (
    <>
      <div className="p-3 flex gap-2 justify-center text-xl content-around ">
        <div className="w-fit p-2 border-none border-2 bg-primary text-white rounded-lg space-x-5">
          <Link to="/" className="[&.active]:font-bold p-2 ">
            Home
          </Link>
          <Link to="/about" className="[&.active]:font-bold p-2 ">
            About
          </Link>
          <Link to="/login" className="[&.active]:font-bold p-2 ">
            Login
          </Link>
          <Link to="/api" className="[&.active]:font-bold p-2 ">
            Api
          </Link>
          <Link to="/api2" className="[&.active]:font-bold p-2 ">
            Api2
          </Link>
          <Link to="/register" className="[&.active]:font-bold p-2 ">
            Register
          </Link>
          <Link to="/account" className="[&.active]:font-bold p-2 ">
            Account
          </Link>
          <Link to="/registos" className="[&.active]:font-bold p-2 ">
            Registos
          </Link>
          <Link to="/messages2" className="[&.active]:font-bold p-2 ">
            Messages2
          </Link>
          {context.auth.isAuthenticated ? (
            <Link to="/profile" className="[&.active]:font-bold p-2 ">
              Profile
            </Link>
          ) : null}
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => <Root />,
});
