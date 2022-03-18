
export const SignupBox = () => {
  return (
    <>
      <h1>SignUp</h1>
      <label for="username">Username:</label>
      <input class="block-inputs" placeholder="IamtheOne" type="text" />
      <label for="username">Email address:</label>
      <input
        class="block-inputs"
        placeholder="JohnWick@gmail.com"
        type="text"
      />
      <label for="password">Password:</label>
      <input class="block-inputs" placeholder="*****" type="password" />
      <label for="password">Confirm Password:</label>
      <input class="block-inputs" placeholder="*****" type="password" />
      <p className="remember-me">
        <input type="checkbox" /> Remember me
      </p>
      <a class="btn-login btn btn-primary" href="#">
        Signup
      </a>
      <a onClick={() => setForAuth("Login")} class="btn-sign-up">
        Already have an Account? <i class="fas fa-chevron-right"></i>
      </a>
    </>
  );
};