export const Register = () => {
  return (
    <div className="">
      <div className="">
        <h1>¡Comienza Ahora!</h1>
        <p>Ingresa tus credenciales acceder</p>

        <section className="">
          <form action="">
            <label htmlFor="email">
              <span>Correo Electrónico:</span>
              <input type="email" id="email" />
            </label>
            <label htmlFor="userName">
              <span>Correo Electrónico:</span>
              <input type="text" id="userName" />
            </label>
            <label htmlFor="password">
              <span>Correo Electrónico:</span>
              <input type="password" id="password" />
            </label>
            <label htmlFor="passwordConfirm">
              <span>Correo Electrónico:</span>
              <input type="password" id="passwordConfirm" />
            </label>
            <button type="submit" id="registerButton">
              Registrarse
            </button>
          </form>
          <p>
            ¿Ya tienes una cuenta? <span>Inicia Sesión</span>
          </p>
        </section>
      </div>
    </div>
  );
};
