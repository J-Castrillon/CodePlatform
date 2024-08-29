import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="text-5xl">Login</h1>
        <form action="" method="post" >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="txtUser">Usario</label>
            <input type="text" name="txtUser" id="txtUser" />
          </div>
          <div className="flex flex-3 flex-col justify-center">
            <label htmlFor="txtPassword">Contraseña</label>
            <input type="password" name="txtPassword" id="txtPassword" />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>

      <Outlet />
    </div>
  );
};
