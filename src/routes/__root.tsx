import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import '@/app.css';

export const Route = createRootRoute({
  component: () => (
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
          <Link to="/messages" className="[&.active]:font-bold p-2 ">
            Messages
          </Link>
          <Link to="/messages2" className="[&.active]:font-bold p-2 ">
            Messages2
          </Link>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
