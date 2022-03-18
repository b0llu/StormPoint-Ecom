

export const LoginBox = () => {

  return (
    <>
      <h1>Login</h1>
      <label for="username">Email address :</label>
      <input
        className="block-inputs"
        placeholder="JohnWick@gmail.com"
        type="text"
      />
      <label for="password">Password :</label>
      <input className="block-inputs" placeholder="*****" type="password" />
      <p className="remember-me">
        <input type="checkbox" /> Remember me
      </p>
      <a className="btn-forgot">Forgot your password?</a>
      <a className="btn-login btn btn-primary">Login</a>
      <a className="btn-sign-up">
        Create New Account <i className="fas fa-chevron-right"></i>
      </a>
    </>
  );
};
