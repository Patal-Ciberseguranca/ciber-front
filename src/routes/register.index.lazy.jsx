import { useNavigate, createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Route = createLazyFileRoute('/register/')({
  component: Register,
});

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate({ from: '/register' });
  const [cipherMode, setCipherMode] = useState('AES-128-CBC');
  const [hmacMode, setHMACMode] = useState('SHA512');

  async function SubmitRegister(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', {
        username,
        email,
        password,
        cipherMode,
        hmacMode,
      });

      const { data } = response;

      if (data == 'UtilizadorExiste') {
        alert('Esse utilizador já existe!');
      } else if (data.token) {
        navigate({ to: '/login', state: { id: username } });
      }
    } catch (e) {
      console.log(e);
      toast.error(e, {
        position: 'bottom-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    }
  }

  /* 

  const TryRegister = async () => {
    if (username == '' || email == '' || password == '') {
      toast.error('Some Fields are in Fault', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
      return false;
    }
     TO-DO REGISTER API 
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000),
    );
    resolveAfter3Sec
      .then(() => {
        toast.success('User Registered, Now Login!', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
        });
        setTimeout(() => {
          navigate({ to: '/login' });
        }, 1500);
      })
      .catch(() => {
        toast.error('User Registration Failed...', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
        });
      });
    toast.info('Checking Registration Data...', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    });
    return true;
  };*/

  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)] ">
      <ToastContainer /> {/* centrar corretamente devido a navbar */}
      <div className="flex p-2 content-center justify-center ">
        <div className="relative">
          <div className="border border-blend rounded-md bg-primary relative text-white z-20">
            <div className=" w-fit p-5 border-none border-2 rounded-lg space-y-3 text-lg justify-center">
              <h2 className="flex justify-center font-bold">Register</h2>
              <label htmlFor="UserLogin" className="block">
                New Username:{' '}
              </label>
              {/* <br /> */}
              <input
                type="text"
                id="UserLogin"
                placeholder="Username"
                className="border-solid border-2 p-2 font-bold text-black rounded-md bg-cinzento"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {/* <br /> */}
              <label htmlFor="EmailLogin" className="block">
                New E-Mail:{' '}
              </label>
              {/* <br /> */}
              <input
                type="text"
                id="EmailLogin"
                placeholder="E-Mail"
                className="border-solid border-2 p-2 font-bold text-black rounded-md bg-cinzento"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* <br /> */}
              <label htmlFor="PassLogin" className="block">
                New Password:
              </label>
              {/* <br className=''/> */}
              <input
                type="password"
                id="PassLogin"
                placeholder="Password"
                className="border-solid border-2 p-2 font-bold text-black rounded-md bg-cinzento"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              {/* Seleção do tipo de cifra */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  Tipo de Cifra:
                </label>
                <select
                  id="tipo-cifra"
                  name="tipo-cifra"
                  value={cipherMode}
                  onChange={(e) => setCipherMode(e.target.value)}
                  className="w-full px-3 py-2 text-sm text-gray-700 border focus:outline-none focus:ring focus:border-blue-300 font-bold"
                >
                  <option
                    value="AES-128-CBC"
                    className="font-bold bg-secondary text-black"
                  >
                    AES-128-CBC
                  </option>
                  <option
                    value="AES-128-CTR"
                    className="font-bold bg-secondary text-black"
                  >
                    AES-128-CTR
                  </option>
                  {/* Adicione mais opções de cifra aqui, se necessário */}
                </select>
              </div>
              {/* Seleção do tipo de hmac */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  Tipo de HMAC:
                </label>
                <select
                  id="tipo-hmac"
                  name="tipo-hmac"
                  value={cipherMode}
                  onChange={(e) => setHMACMode(e.target.value)}
                  className="w-full px-3 py-2 text-sm text-gray-700 border focus:outline-none focus:ring focus:border-blue-300 font-bold"
                >
                  <option
                    value="SHA512"
                    className="font-bold bg-secondary text-black"
                  >
                    SHA512
                  </option>
                  <option
                    value="SHA256"
                    className="font-bold bg-secondary text-black"
                  >
                    SHA256
                  </option>
                  {/* Adicione mais opções de cifra aqui, se necessário */}
                </select>
              </div>
              <br />
              <button
                onClick={SubmitRegister}
                className="cursor-pointer justify-center content-center block mx-auto mt-3 bg-secondary font-bold py-2 px-4 text-black"
              >
                Register
              </button>
            </div>
          </div>
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
        </div>
      </div>
    </div>
  );
}
