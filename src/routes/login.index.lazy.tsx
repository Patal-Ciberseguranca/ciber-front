import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/login/')({
  component: Login,
});

function Login() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)]">
      {' '}
      {/* centrar corretamente devido a navbar */}
      <div className="flex p-2 content-center justify-center ">
        <div className="relative">
          <div className="border border-blend rounded-md bg-primary relative text-white z-20">
            <form
              action=""
              className=" w-fit p-5 border-none border-2 rounded-lg space-y-3 text-lg justify-center"
            >
              <h2 className="flex justify-center font-bold">Login</h2>
              <label htmlFor="UserLogin" className="block">
                Username:{' '}
              </label>
              {/* <br /> */}
              <input
                type="text"
                id="UserLogin"
                placeholder="Username"
                className="border-solid border-2 p-1"
              />
              {/* <br /> */}
              <label htmlFor="PassLogin" className="block">
                Password:
              </label>
              {/* <br className=''/> */}
              <input
                type="text"
                id="PassLogin"
                placeholder="Password"
                className="border-solid border-2 p-1"
              />
              <br />
              <input
                type="submit"
                value="Submit"
                className="cursor-pointer justify-center content-center block mx-auto mt-3 bg-secundary  font-bold py-2 px-4 rounded-lg text-black "
              ></input>
            </form>
          </div>
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-primary via-blend to-primary z-10"></div>
        </div>
      </div>
    </div>
  );
}
