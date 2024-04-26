import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/login/')({
  component: Login,
});

function Login() {
  var username = '';
  var password = '';

  const setUsername = (value: any) => {
    username = value;
  };

  const setPassword = (value: any) => {
    password = value;
  };

  const TryLogin = async () => {
    if (username == '' || password == '') {
      return false;
    }
    return true;
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)]">
      {' '}
      {/* centrar corretamente devido a navbar */}
      <div className="flex p-2 content-center justify-center ">
        <div className="relative">
          <div className="border border-blend rounded-md bg-primary relative text-white z-20">
            <form
              action="get"
              className=" w-fit p-5 border-none border-2 rounded-lg space-y-3 text-lg justify-center"
            >
              <h2 className="flex justify-center font-bold">Login</h2>
              <label className="block">Username: </label>

              <input
                type="text"
                placeholder="Username"
                className="border-solid border-2 p-1 font-bold text-black"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <label className="block">Password:</label>

              <input
                type="password"
                placeholder="Password"
                className="border-solid border-2 p-1 font-bold text-black"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <button
                onClick={TryLogin}
                className="cursor-pointer justify-center content-center block mx-auto mt-3 bg-secondary font-bold py-2 px-4 rounded-lg text-black"
              >
                Login
              </button>
            </form>
          </div>
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
        </div>
      </div>
    </div>
  );
}
