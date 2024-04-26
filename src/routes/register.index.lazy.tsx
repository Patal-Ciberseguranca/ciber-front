import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createLazyFileRoute('/register/')({
  component: Register,
});

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const TryRegister = async () => {
    if (username == '' || email == '' || password == '') {
      return false;
    }
    return true;
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)] ">
      {' '}
      {/* centrar corretamente devido a navbar */}
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
                className="border-solid border-2 p-1 font-bold text-black"
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
                className="border-solid border-2 p-1 font-bold text-black"
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
                className="border-solid border-2 p-1 font-bold text-black"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <button
                onClick={TryRegister}
                className="cursor-pointer justify-center content-center block mx-auto mt-3 bg-secondary font-bold py-2 px-4 rounded-lg text-black"
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
