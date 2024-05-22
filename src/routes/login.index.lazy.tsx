import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/components/AuthProvider';

export const Route = createLazyFileRoute('/login/')({
  component: Login,
});

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate({ from: '/login' });
  async function SubmitLogin(e: any) {
    e.preventDefault();

    const success = auth.loginAction(username, password);

    success
      .then((success) => {
        if (success) {
          toast.success('Credentials Approved!', {
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
      .catch((error) => {
        if (error) {
          console.log('Error: ' + error.message);
          toast.error(error.message, {
            position: 'bottom-center',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark',
          });
        }
      });
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)]">
      <ToastContainer /> {/* centrar corretamente devido a navbar */}
      <div className="flex p-2 content-center justify-center ">
        <div className="relative">
          <div className="border border-blend rounded-md bg-primary relative text-white z-20">
            <div className=" w-fit p-5 border-none border-2 rounded-lg space-y-3 text-lg justify-center">
              <h2 className="flex justify-center font-bold">Login</h2>
              <label className="block">Username: </label>
              <input
                type="text"
                placeholder="Username"
                className="border-solid border-2 p-2 font-bold text-black rounded-md bg-cinzento"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <label className="block">Password:</label>

              <input
                type="password"
                placeholder="Password"
                className="border-solid border-2 p-2 font-bold text-black rounded-md bg-cinzento"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <button
                onClick={SubmitLogin}
                className="cursor-pointer justify-center content-center block mx-auto mt-3 bg-secondary font-bold py-2 px-4 rounded-lg text-black"
              >
                Login
              </button>
            </div>
          </div>
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
        </div>
      </div>
    </div>
  );
}
