import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useFilterReducerContext } from "./FilterReducer.context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const [cartProducts, setCartProducts] = useState([]);
  const { dispatch } = useFilterReducerContext();

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        setCartProducts(response.data.cart);
        dispatch({ type: "SUCCESS_TOAST", payload: "Added to Cart" });
      }
    } catch (err) {
      dispatch({ type: "ERROR_TOAST", payload: "You need to login first" });
    }
  };

  const removeFromCart = async (item) => {
    try {
      const response = await axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setCartProducts(response.data.cart);
        dispatch({ type: "ERROR_TOAST", payload: "Removed from Cart" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeCartQty = async (quantity, id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          qty: quantity,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200) {
        setCartProducts(response.data.cart);
        dispatch({ type: "SUCCESS_TOAST", payload: "Updated" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        changeCartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
