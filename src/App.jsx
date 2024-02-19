
const App = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="hidden h-screen w-1/2 bg-slate-700  sm:block ">
          <div className="flex h-screen items-center text-4xl font-medium">
            Welcome Back <br />
            Please Login to continue
          </div>
        </div>
        <div className="flex h-screen w-1/2 items-center justify-center bg-slate-600">
          <div className="">
            <h1 className="text-center text-4xl">LOGIN</h1>
            <div className="mt-5">
              <div>
                <label className="ml-3 text-lg font-medium">Email:</label>
                <input
                  className="m-1 w-full rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div>
                <label className="ml-3 text-lg font-medium">Password:</label>
                <input
                  className="m-1 w-full rounded-xl border-2 border-gray-300 p-3"
                  placeholder="password"
                  type="password"
                />
              </div>
              <div className="mt-1 flex justify-between">
                <div>
                  <input className="ml-2" type="checkbox" />
                  <label htmlFor="remember" className="text-base">
                    Remember me
                  </label>
                </div>
                <div>Forget Password</div>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="rounded bg-slate-800 px-7 py-2 font-bold">
                  Login
                </button>
              </div>
              <div className="text-center mt-3 text-base">
                Dont have an acccount? signup 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
