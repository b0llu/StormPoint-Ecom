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
  
  return (
    <ShowcaseContainer>
      <TitleContainer />
      <FeaturedContainer />
    </ShowcaseContainer>
  );
};
