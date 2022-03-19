import axios from "axios";
import { useEffect } from "react";
import { useCartContext } from "../../context/Cart.context";
import { useWishlistContext } from "../../context/Wishlist.context";
import {
  FeaturedContainer,
  ShowcaseContainer,
  TitleContainer,
} from "./LandingComponents/index";

export const LandingPage = () => {
  const { setWishlistProducts } = useWishlistContext();
  const { setCartProducts } = useCartContext();
  const encodedToken = localStorage.getItem("token");

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.post("/api/auth/verify", {
          encodedToken: encodedToken,
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
      } catch (error) {}
    })();
  }, []);

  return (
    <ShowcaseContainer>
      <TitleContainer />
      <FeaturedContainer />
    </ShowcaseContainer>
  );
};
