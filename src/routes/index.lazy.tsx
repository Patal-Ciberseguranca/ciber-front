import { createFileRoute, redirect, useNavigate, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Route = createFileRoute('/')({
  component: Choose,
});

function Choose() {
  const navigate = useNavigate(); 
  const context = Route.useRouteContext();

  useEffect(() => {
    if (context.auth.isAuthenticated) {
      toast.success('Sessão Já Iniciada, a Redirecionar!', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
      setTimeout(() => {
        navigate({
          to: '/registos',
        });
      }, 1500);
    }
  })

  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)]">
      <ToastContainer /> {/* centrar corretamente devido a navbar */}
      <div className="flex p-10 content-center justify-center space-x-10 h-96 w-[1152px]">
        <Link
          to="/login"
          className="relative bg-primary border-blend border-solid border w-[570px] font-bold text-3xl text-center rounded-md"
        >
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-primary rounded-md">
            Login
          </div>
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
        </Link>

        <Link
          to="/register"
          className="relative bg-primary border-blend border-solid border w-[570px] font-bold text-3xl text-center rounded-md"
        >
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-primary rounded-md">
            Register
          </div>
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
        </Link>
      </div>
    </div>
  );
}
