import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-row justify-center h-screen items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mb-5">Login</h1>

          <form action="#" method="post">
            <div className="flex flex-col mb-3">
              <label htmlFor="txtUser">Usuario</label>
              <input type="text" name="txtUser" id="txtUser" placeholder="Ingresa tu usuario" className="border border-slate-500 rounded-md p-2"/>
            </div>

            <div className="flex flex-col mb-3">
              <div className="flex flex-row">
                <label htmlFor="txtPassword" className="block leading-6">
                  Contraseña
                </label>
                <a href="#" className="hover:ahvr block leading-6">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input type="password" name="txtPassword" id="txtPassword" placeholder="Ingresa tu contraseña" className="border border-slate-500 rounded-md p-2"/>
            </div>

            <div className="">
              <button className="bg-neutral-600 p-2 w-full rounded-lg text-white hover:bg-slate-600" type="submit">
                Ingresar
              </button>
            </div>
          </form>
        </div>

        <div className="">
          <img src="" alt="Imagen registro" className="rounded-lg" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
