import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useCartContext } from "./Cart.context";
import { useFilterReducerContext } from "./FilterReducer.context";
import { useWishlistContext } from "./Wishlist.context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setWishlistProducts } = useWishlistContext();
  const { setCartProducts } = useCartContext();
  const { dispatch } = useFilterReducerContext();

  const login = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: userDetails.email,
        password: userDetails.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", data.foundUser.firstName);
      dispatch({ type: "SUCCESS_TOAST", payload: "Log In Successful" });
    } catch (error) {
      dispatch({ type: "ERROR_TOAST", payload: error.response.data.errors });
    }
  };

  const signup = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: userDetails.user,
        email: userDetails.email,
        password: userDetails.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", data.createdUser.firstName);
      dispatch({ type: "SUCCESS_TOAST", payload: "Sign Up Successful" });
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    dispatch({ type: "ERROR_TOAST", payload: "Logged Out" });
    localStorage.clear();
    setCartProducts([]);
    setWishlistProducts([]);
  };

  const testLogger = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: "admin@gmail.com",
        password: "admin",
      });

      const cartResponse = await axios.get("/api/user/cart", {
        headers: {
          authorization: data.encodedToken,
        },
      });
      if (cartResponse.status === 200) {
        setCartProducts(cartResponse.data.cart);
      }

      const wishlistResponse = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: data.encodedToken,
        },
      });
      if (wishlistResponse.status === 200) {
        setWishlistProducts(wishlistResponse.data.wishlist);
      }

      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", data.foundUser.firstName);
      dispatch({ type: "SUCCESS_TOAST", payload: "Log In Successful" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, signup, signout, testLogger }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
