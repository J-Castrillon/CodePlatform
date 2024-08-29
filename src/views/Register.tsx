import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterType } from "../types/register";

export const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterType>();

  const handleRegister = (data: RegisterType) => {
    
  }

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
            onSubmit={handleSubmit(handleRegister)}
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
                className={`bg-transparent text-slate-100 p-2 rounded-lg ${
                  errors.email
                    ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
                    : "border-2 border-gray-100"
                }`}
                {...register("email", {
                  required: "🚨 Campo requerido",
                })}
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
                className={`bg-transparent text-slate-100 p-2 rounded-lg ${
                  errors.userName
                    ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
                    : "border-2 border-gray-100"
                }`}
                {...register("userName", {
                  required: "🚨 Campo requerido",
                })}
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
                className={`bg-transparent text-slate-100 p-2 rounded-lg ${
                  errors.password
                    ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
                    : "border-2 border-gray-100"
                }`}                {...register("password", {
                  required: "🚨 Campo requerido",
                })}
              />
            </label>
            <label
              htmlFor="passwordConfirm"
              className="text-slate-100 font-semibold text-sm flex flex-col gap-2"
            >
              <span>Confirmación de contraseña:</span>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirma tu clave"
                className={`bg-transparent text-slate-100 p-2 rounded-lg ${
                  errors.confirmPassword
                    ? "border-t-2 border-r-2 border-b-2 border-l-8 border-red-300"
                    : "border-2 border-gray-100"
                }`}                {...register("confirmPassword", {
                  required: "🚨 Campo requerido",
                })}
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
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/"
              className="text-indigo-500 hover:text-indigo-600 font-semibold underline"
            >
              Inicia Sesión
            </Link>
          </p>
        </div>
      </section>
      <section id="source"></section>
    </div>
  );
};
