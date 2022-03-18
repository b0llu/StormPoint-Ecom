import { useState } from "react";
import { Link } from "react-router-dom";
import { Toast } from "../../../../Components";
import { useAuthContext } from "../../../../context/Auth.context";
import { AuthContainer } from "../AuthContainer/AuthContainer";
import { LoginBox } from "../LoginBox/LoginBox";

export const SignupBox = () => {
  const { signup } = useAuthContext();

  const [userDetails, setUserDetails] = useState({
    user: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>SignUp</h1>
      <label htmlFor="username">Username:</label>
      <input
        onChange={(e) =>
          setUserDetails({ ...userDetails, user: e.target.value })
        }
        className="block-inputs"
        placeholder="IamtheOne"
        type="text"
      />
      <label htmlFor="username">Email address:</label>
      <input
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        className="block-inputs"
        placeholder="JohnWick@gmail.com"
        type="text"
      />
      <label htmlFor="password">Password:</label>
      <input
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
        className="block-inputs"
        placeholder="*****"
        type="password"
      />
      <label htmlFor="password">Confirm Password:</label>
      <input className="block-inputs" placeholder="*****" type="password" />
      <p
        style={{ alignItems: "center", justifyContent: "center" }}
        className="remember-me"
      >
        <input type="checkbox" /> I accept all Terms & Conditions
      </p>
      <button
        type="button"
        onClick={() => signup(userDetails)}
        className="btn-login btn btn-primary"
      >
        Signup
      </button>
      <Link
        className="btn-sign-up"
        to="/login"
        element={
          <AuthContainer>
            <LoginBox />
          </AuthContainer>
        }
      >
        Already have an Account? <i className="fas fa-chevron-right"></i>
      </Link>
    </>
  );
};
