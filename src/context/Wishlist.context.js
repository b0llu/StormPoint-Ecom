import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useFilterReducerContext } from "./FilterReducer.context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { dispatch } = useFilterReducerContext();

  const addToWishlist = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        setWishlistProducts(response.data.wishlist);
        dispatch({ type: "SUCCESS_TOAST", payload: "Added to Wishlist" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromWishlist = async (item) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setWishlistProducts(response.data.wishlist);
        dispatch({ type: "ERROR_TOAST", payload: "Removed from Cart" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistProducts, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { WishlistProvider, useWishlistContext };
