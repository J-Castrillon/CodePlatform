import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="flex flex-row justify-between h-screen">
      <section
        id="data"
        className="w-3/6 flex flex-col justify-center py-14 gap-4 bg-black"
      >
        <h1 className="text-3xl text-slate-200 font-bold text-center">
          Comienza Ahora
        </h1>
        <p className="text-center text-md text-slate-300">
          ¡Ingresa tus credenciales y accede a tu cuenta!
        </p>

        <div className="container">
          <form
            action=""
            className="flex flex-col justify-center gap-3 sm:px-10 md:px-32 mt-10"
          >
            <label
              htmlFor="email"
              className="text-slate-100 font-semibold text-sm flex flex-col gap-1"
            >
              <span>Correo Electrónico:</span>
              <input
                type="email"
                id="email"
                placeholder="email@email.com"
                className="p-2  border-2 text-lgx bg-transparent text-slate-100 rounded-lg"
              />
            </label>
            <label
              htmlFor="userName"
              className="text-slate-100 font-semibold text-sm flex flex-col gap-2"
            >
              <span>Nombre de usuario:</span>
              <input
                type="text"
                id="userName"
                placeholder="Pedro..."
                className="p-2  border-2 text-lgx bg-transparent text-slate-100 rounded-lg"
              />
            </label>
            <label
              htmlFor="password"
              className="text-slate-100 font-semibold text-sm flex flex-col gap-2"
            >
              <span>Contraseña:</span>
              <input
                type="password"
                id="password"
                placeholder="Clave"
                className="p-2  border-2 text-lgx bg-transparent text-slate-100 rounded-lg"
              />
            </label>
            <label
              htmlFor="passwordConfirm"
              className="text-slate-100 font-semibold text-sm flex flex-col gap-2"
            >
              <span>Confirmación de contraseña:</span>
              <input
                type="password"
                id="passwordConfirm"
                placeholder="Confirma tu clave"
                className="p-2 border-2 text-lgx bg-transparent text-slate-100 rounded-lg"
              />
            </label>
            <button
              type="submit"
              id="registerButton"
              className="p-2 font-semibold text-lg text-slate-100 bg-indigo-600 hover:bg-indigo-700 rounded-2xl mt-5"
            >
              Registrarse
            </button>
          </form>
          <p className="text-md text-slate-200 text-center mt-2">
            ¿Ya tienes una cuenta? <Link to="/" className="text-indigo-500 hover:text-indigo-600 font-semibold underline">Inicia Sesión</Link>
          </p>
        </div>
      </section>
      <section id="source"></section>
    </div>
  );
};
