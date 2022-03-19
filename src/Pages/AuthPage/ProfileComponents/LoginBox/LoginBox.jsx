import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../../../../context/Auth.context";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { SignupBox } from "../SignupBox/SignupBox";

export const LoginBox = () => {
  const { login, testLogger } = useAuthContext();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState({ state: false, text: "" });
  const [type, setType] = useState(true);

  const validation = /^(?=.*\d)(?=.*[a-z]).{5,10}$/;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError({
        ...error,
        state: false,
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  const loginHandler = () => {
    if (userDetails.password.match(validation)) {
      login(userDetails);
    } else if (!userDetails.email || !userDetails.password) {
      setError({
        text: "Dont leave any field empty",
        state: true,
      });
    } else {
      setError({
        text: "Password should be AlphaNumeric and more than 5 letters",
        state: true,
      });
    }
  };

  return (
    <>
      <form className="login-container card-shadow">
        {error.state ? <p className="for-alert">{error.text}</p> : null}
        <h1>Login</h1>
        <label htmlFor="username">Email address :</label>
        <input
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          className="block-inputs"
          placeholder="JohnWick@gmail.com"
          type="email"
          name="email"
        />
        <label htmlFor="password">Password :</label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            className="block-inputs"
            placeholder="*****"
            type={type ? "password" : "text"}
          />
          {type ? (
            <span
              onClick={() => setType(!type)}
              className="material-icons visibility-icon"
            >
              visibility_off
            </span>
          ) : (
            <span
              onClick={() => setType(!type)}
              className="material-icons visibility-icon"
            >
              visibility
            </span>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label className="remember-me">
            <input type="checkbox" /> Remember me
          </label>
          <a className="btn-forgot">Forgot your password?</a>
        </div>
        <button
          type="button"
          onClick={() => testLogger()}
          className="btn-login btn btn-primary"
        >
          Login with Test Credentials
        </button>
        <button
          type="button"
          onClick={() => loginHandler()}
          className="btn-login btn btn-primary"
        >
          Login
        </button>
        <Link
          className="btn-sign-up"
          to="/signup"
          element={
            <AuthContainer>
              <SignupBox />
            </AuthContainer>
          }
        >
          Create New Account <i className="fas fa-chevron-right"></i>
        </Link>
      </form>
    </>
  );
};
