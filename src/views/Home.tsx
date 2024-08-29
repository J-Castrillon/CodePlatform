import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-row justify-center h-screen items-center">
        <div className="flex flex-col w-3/6">
          <h1 className="font-bold text-2xl text-slate-200 mb-5 text-center">
            Iniciar sesión
          </h1>

          <form action="#" method="post" className="flex flex-col gap-4 px-8">
            <div className="flex flex-col">
              <label
                htmlFor="txtUser"
                className="text-slate-200 font-semibold mb-2"
              >
                Usuario
              </label>
              <input
                type="text"
                name="txtUser"
                id="txtUser"
                placeholder="Ingresa tu usuario"
                className="border border-slate-500 rounded-md p-2"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="txtPassword"
                className="block font-semibold text-slate-200 mb-2"
              >
                Contraseña
              </label>

              <input
                type="password"
                name="txtPassword"
                id="txtPassword"
                placeholder="Ingresa tu contraseña"
                className="border border-slate-500 rounded-md p-2"
              />
            </div>

            <div className="">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 p-2 w-full rounded-lg text-white font-semibold"
                type="submit"
              >
                Ingresar
              </button>
              <div className="flex justify-between">
                <Link
                  to="#"
                  className="hover:text-indigo-400 font-semibold text-sm mt-2 text-slate-200 leading-6"
                >
                  ¡Regístrate!
                </Link>
                <Link
                  to="#"
                  className="hover:text-indigo-400 font-semibold text-sm mt-2 text-slate-200 leading-6"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
          </form>
        </div>

        <div className="w-3/6">
          <img src="" alt="Imagen registro" className="rounded-lg" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
