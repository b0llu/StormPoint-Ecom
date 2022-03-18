import { useState } from "react";
import { Link } from "react-router-dom";
import { Toast } from "../../../../Components";
import { useAuthContext } from "../../../../context/Auth.context";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { SignupBox } from "../SignupBox/SignupBox";

export const LoginBox = () => {
  const { login, testLogger } = useAuthContext();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  return (
    <>
      <Toast />
      <h1>Login</h1>
      <label htmlFor="username">Email address :</label>
      <input
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        className="block-inputs"
        placeholder="JohnWick@gmail.com"
        type="text"
      />
      <label htmlFor="password">Password :</label>
      <input
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
        className="block-inputs"
        placeholder="*****"
        type="password"
      />
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
        onClick={() => login(userDetails)}
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
    </>
  );
};
