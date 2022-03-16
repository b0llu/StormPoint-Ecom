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
      // const response = await axios({
      //   method: "post",
      //   url: "/api/user/cart",
      //   data: { product: item },
      //   headers: {
      //     authorization: encodedToken,
      //   },
      // });
      if (response.status === 201) {
        setCartProducts((oldProducts) => {
          return [...oldProducts, item];
        });
        dispatch({ type: "SUCCESS_TOAST", payload: 'Added to Cart' });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const removeFromCart = async (item) => {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/user/cart/${item._id}`,
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setCartProducts((oldProducts) => {
          return oldProducts.filter((obj) => obj.id !== item.id);
        });
        dispatch({ type: "ERROR_TOAST", payload: "Removed from Cart" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
