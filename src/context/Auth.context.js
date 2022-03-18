import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useCartContext } from "./Cart.context";
import { useFilterReducerContext } from "./FilterReducer.context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { dispatch } = useFilterReducerContext();

  const login = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: userDetails.email,
        password: userDetails.password,
      });
      // saving the encodedToken in the localStorage
      console.log(data);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", data.foundUser.firstName);
      dispatch({ type: "SUCCESS_TOAST", payload: "Log In Successful" });
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        username: userDetails.user,
        email: userDetails.email,
        password: userDetails.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", data.createdUser.username);
      dispatch({ type: "SUCCESS_TOAST", payload: "Sign Up Successful" });
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    localStorage.clear();
  };

  const testLogger = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: "admin@gmail.com",
        password: "admin",
      });
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", data.foundUser.firstName);
      console.log(data);
      dispatch({ type: "SUCCESS_TOAST", payload: "Log In Successful" });
    } catch (error) {}
  };

  return (
    <AuthContext.Provider value={{ login, signup, signout, testLogger }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
