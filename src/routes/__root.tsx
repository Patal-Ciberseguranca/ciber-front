import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useNavigate,
  useRouteContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthContext, useAuth } from '@/components/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/app.css';

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthContext;
}

const Root = (): React.ReactNode => {
  const context = Route.useRouteContext();
  const navigate = useNavigate();
  const user = useAuth();

  const doUserLogout = () => {
    toast.error('Sessão Terminada com Sucesso!', {
      position: 'bottom-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    });
    user.logOut();
    setTimeout(() => {
      navigate({ to: '/' });
    }, 1000);
  };

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
          {context.auth.isAuthenticated ? (
            <>
              <Link to="/messages2" className="[&.active]:font-bold p-2 ">
                Messages2
              </Link>
              <Link to="/criarregisto" className="[&.active]:font-bold p-2 ">
                Criar Registo
              </Link>
              <Link to="/registos" className="[&.active]:font-bold p-2 ">
                Registos
              </Link>
              <Link
                onClick={() => {
                  doUserLogout();
                }}
              >
                Logout
              </Link>
            </>
          ) : (
            <></>
          )}
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
